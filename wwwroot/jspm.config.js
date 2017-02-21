SystemJS.config({
  browserConfig: {
      baseURL: "/",
      paths: {
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/"
      }
  },
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.21'
    }
  },
  packages: {
    'app': {
      'defaultExtension': 'ts'
    },
    'typings': {
      'defaultExtension': 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'assert': 'npm:jspm-nodelibs-assert@0.2.0',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.1',
    'child_process': 'npm:jspm-nodelibs-child_process@0.2.0',
    'constants': 'npm:jspm-nodelibs-constants@0.2.0',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.0',
    'events': 'npm:jspm-nodelibs-events@0.2.0',
    'fs': 'npm:jspm-nodelibs-fs@0.2.0',
    'module': 'npm:jspm-nodelibs-module@0.2.0',
    'net': 'npm:jspm-nodelibs-net@0.2.0',
    'os': 'npm:jspm-nodelibs-os@0.2.0',
    'path': 'npm:jspm-nodelibs-path@0.2.1',
    'plugin-typescript': 'github:frankwallis/plugin-typescript@7.0.4',
    'process': 'npm:jspm-nodelibs-process@0.2.0',
    'stream': 'npm:jspm-nodelibs-stream@0.2.0',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.0',
    'aurelia-binding': 'npm:aurelia-binding@1.1.1',
    'aurelia-bootstrapper': 'npm:aurelia-bootstrapper@2.0.1',
    'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.0',
    'aurelia-event-aggregator': 'npm:aurelia-event-aggregator@1.0.1',
    'aurelia-framework': 'npm:aurelia-framework@1.0.8',
    'aurelia-history': 'npm:aurelia-history@1.0.0',
    'aurelia-history-browser': 'npm:aurelia-history-browser@1.0.0',
    'aurelia-loader': 'npm:aurelia-loader@1.0.0',
    'aurelia-loader-default': 'npm:aurelia-loader-default@1.0.0',
    'aurelia-logging': 'npm:aurelia-logging@1.2.0',
    'aurelia-logging-console': 'npm:aurelia-logging-console@1.0.0',
    'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
    'aurelia-pal': 'npm:aurelia-pal@1.2.0',
    'aurelia-pal-browser': 'npm:aurelia-pal-browser@1.1.0',
    'aurelia-path': 'npm:aurelia-path@1.1.1',
    'aurelia-polyfills': 'npm:aurelia-polyfills@1.1.1',
    'aurelia-route-recognizer': 'npm:aurelia-route-recognizer@1.1.0',
    'aurelia-router': 'npm:aurelia-router@1.1.1',
    'aurelia-task-queue': 'npm:aurelia-task-queue@1.1.0',
    'aurelia-templating': 'npm:aurelia-templating@1.2.0',
    'aurelia-templating-binding': 'npm:aurelia-templating-binding@1.2.0',
    'aurelia-templating-resources': 'npm:aurelia-templating-resources@1.2.0',
    'aurelia-templating-router': 'npm:aurelia-templating-router@1.0.1',
    'typescript': 'npm:typescript@2.2.0',
    'util': 'npm:jspm-nodelibs-util@0.2.1',
    'vm': 'npm:jspm-nodelibs-vm@0.2.0'
  },
  packages: {
    'npm:typescript@2.2.0': {
      'map': {
        'source-map-support': 'npm:source-map-support@0.4.11'
      }
    },
    'npm:source-map-support@0.4.11': {
      'map': {
        'source-map': 'npm:source-map@0.5.6'
      }
    },
    'npm:jspm-nodelibs-os@0.2.0': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.0': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'inherits': 'npm:inherits@2.0.3',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.1': {
      'map': {
        'buffer': 'npm:buffer@4.9.1'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.3.3'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'miller-rabin': 'npm:miller-rabin@4.0.0'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'bn.js': 'npm:bn.js@4.11.6',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.3'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.2.0',
        'ieee754': 'npm:ieee754@1.1.8'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:sha.js@2.4.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'inherits': 'npm:inherits@2.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:elliptic@6.3.3': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'brorand': 'npm:brorand@1.0.7',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.7'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.0': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.2'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.0': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:readable-stream@2.2.2': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    }
  }
});
