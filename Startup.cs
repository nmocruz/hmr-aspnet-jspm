using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace FileWatcher
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

             
             
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebSockets();
                app.Map("/hmr", hmrApp=> {
                    
                    FileSystemWatcher watcher = new FileSystemWatcher();
                    watcher.Path = env.ContentRootPath;
                    watcher.IncludeSubdirectories = true;
                    watcher.EnableRaisingEvents = true;
                    watcher.NotifyFilter = NotifyFilters.LastWrite;
                    hmrApp.Use( async (context, next) =>
                    {
                        if(context.WebSockets.IsWebSocketRequest){
                            var webSocket = await context.WebSockets.AcceptWebSocketAsync();
                            await WatchChanges(context, webSocket, loggerFactory.CreateLogger("Echo"), watcher);
                        }
                        else{
                            await next();
                        }
                        
                    });
                }); 
            }

            app.UseStaticFiles();

            
        }

        private async Task WatchChanges(HttpContext context, WebSocket socket, ILogger logger, FileSystemWatcher watcher)
        {
            logger.LogInformation("Connected");
            
    
                var ct = context.RequestAborted;         
                FileSystemEventHandler handler = null;
                
                handler = (ob, arg)=>{
                        
                    if(arg.Name.EndsWith(".ts")){

                            logger.LogTrace($"file chaged: {arg.Name}");
                            var path = arg.FullPath
                                .Replace(watcher.Path, "~")
                                .Replace(Path.DirectorySeparatorChar, '/');        
                            var msg = JsonConvert.SerializeObject(new {
                                path = path
                            });
                            var buffer = Encoding.UTF8.GetBytes(msg);
                            var segment = new ArraySegment<byte>(buffer);
                            if(socket.State == WebSocketState.Open)
                                socket.SendAsync(segment, WebSocketMessageType.Text, true, ct);
                            else if(socket.State == WebSocketState.Closed){
                                watcher.Changed-=handler;
                            }
                    }
                    
                };   
                watcher.Changed+=handler;
                byte[] buffer2 = new byte[1024];
                var received = await socket.ReceiveAsync(new ArraySegment<byte>(buffer2), CancellationToken.None);
                while (!received.CloseStatus.HasValue)
                {
                    received = await socket.ReceiveAsync(new ArraySegment<byte>(buffer2), CancellationToken.None);
                }
                  
        }
    }
}
