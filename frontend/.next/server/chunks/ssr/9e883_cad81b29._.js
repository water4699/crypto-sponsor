module.exports = [
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/frontend/node_modules/node-gyp-build/node-gyp-build.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'
var runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t // eslint-disable-line
;
var vars = process.config && process.config.variables || {};
var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
var abi = process.versions.modules // TODO: support old node where this is undef
;
var runtime = isElectron() ? 'electron' : isNwjs() ? 'node-webkit' : 'node';
var arch = process.env.npm_config_arch || os.arch();
var platform = process.env.npm_config_platform || os.platform();
var libc = process.env.LIBC || (isAlpine(platform) ? 'musl' : 'glibc');
var armv = process.env.ARM_VERSION || (arch === 'arm64' ? '8' : vars.arm_version) || '';
var uv = (process.versions.uv || '').split('.')[0];
module.exports = load;
function load(dir) {
    return runtimeRequire(load.resolve(dir));
}
load.resolve = load.path = function(dir) {
    dir = path.resolve(dir || '.');
    try {
        var name = runtimeRequire(path.join(dir, 'package.json')).name.toUpperCase().replace(/-/g, '_');
        if (process.env[name + '_PREBUILD']) dir = process.env[name + '_PREBUILD'];
    } catch (err) {}
    if (!prebuildsOnly) {
        var release = getFirst(path.join(dir, 'build/Release'), matchBuild);
        if (release) return release;
        var debug = getFirst(path.join(dir, 'build/Debug'), matchBuild);
        if (debug) return debug;
    }
    var prebuild = resolve(dir);
    if (prebuild) return prebuild;
    var nearby = resolve(path.dirname(process.execPath));
    if (nearby) return nearby;
    var target = [
        'platform=' + platform,
        'arch=' + arch,
        'runtime=' + runtime,
        'abi=' + abi,
        'uv=' + uv,
        armv ? 'armv=' + armv : '',
        'libc=' + libc,
        'node=' + process.versions.node,
        process.versions.electron ? 'electron=' + process.versions.electron : '',
        typeof __webpack_require__ === 'function' ? 'webpack=true' : '' // eslint-disable-line
    ].filter(Boolean).join(' ');
    throw new Error('No native build was found for ' + target + '\n    loaded from: ' + dir + '\n');
    function resolve(dir) {
        // Find matching "prebuilds/<platform>-<arch>" directory
        var tuples = readdirSync(path.join(dir, 'prebuilds')).map(parseTuple);
        var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0];
        if (!tuple) return;
        // Find most specific flavor first
        var prebuilds = path.join(dir, 'prebuilds', tuple.name);
        var parsed = readdirSync(prebuilds).map(parseTags);
        var candidates = parsed.filter(matchTags(runtime, abi));
        var winner = candidates.sort(compareTags(runtime))[0];
        if (winner) return path.join(prebuilds, winner.file);
    }
};
function readdirSync(dir) {
    try {
        return fs.readdirSync(dir);
    } catch (err) {
        return [];
    }
}
function getFirst(dir, filter) {
    var files = readdirSync(dir).filter(filter);
    return files[0] && path.join(dir, files[0]);
}
function matchBuild(name) {
    return /\.node$/.test(name);
}
function parseTuple(name) {
    // Example: darwin-x64+arm64
    var arr = name.split('-');
    if (arr.length !== 2) return;
    var platform = arr[0];
    var architectures = arr[1].split('+');
    if (!platform) return;
    if (!architectures.length) return;
    if (!architectures.every(Boolean)) return;
    return {
        name,
        platform,
        architectures
    };
}
function matchTuple(platform, arch) {
    return function(tuple) {
        if (tuple == null) return false;
        if (tuple.platform !== platform) return false;
        return tuple.architectures.includes(arch);
    };
}
function compareTuples(a, b) {
    // Prefer single-arch prebuilds over multi-arch
    return a.architectures.length - b.architectures.length;
}
function parseTags(file) {
    var arr = file.split('.');
    var extension = arr.pop();
    var tags = {
        file: file,
        specificity: 0
    };
    if (extension !== 'node') return;
    for(var i = 0; i < arr.length; i++){
        var tag = arr[i];
        if (tag === 'node' || tag === 'electron' || tag === 'node-webkit') {
            tags.runtime = tag;
        } else if (tag === 'napi') {
            tags.napi = true;
        } else if (tag.slice(0, 3) === 'abi') {
            tags.abi = tag.slice(3);
        } else if (tag.slice(0, 2) === 'uv') {
            tags.uv = tag.slice(2);
        } else if (tag.slice(0, 4) === 'armv') {
            tags.armv = tag.slice(4);
        } else if (tag === 'glibc' || tag === 'musl') {
            tags.libc = tag;
        } else {
            continue;
        }
        tags.specificity++;
    }
    return tags;
}
function matchTags(runtime, abi) {
    return function(tags) {
        if (tags == null) return false;
        if (tags.runtime && tags.runtime !== runtime && !runtimeAgnostic(tags)) return false;
        if (tags.abi && tags.abi !== abi && !tags.napi) return false;
        if (tags.uv && tags.uv !== uv) return false;
        if (tags.armv && tags.armv !== armv) return false;
        if (tags.libc && tags.libc !== libc) return false;
        return true;
    };
}
function runtimeAgnostic(tags) {
    return tags.runtime === 'node' && tags.napi;
}
function compareTags(runtime) {
    // Precedence: non-agnostic runtime, abi over napi, then by specificity.
    return function(a, b) {
        if (a.runtime !== b.runtime) {
            return a.runtime === runtime ? -1 : 1;
        } else if (a.abi !== b.abi) {
            return a.abi ? -1 : 1;
        } else if (a.specificity !== b.specificity) {
            return a.specificity > b.specificity ? -1 : 1;
        } else {
            return 0;
        }
    };
}
function isNwjs() {
    return !!(process.versions && process.versions.nw);
}
function isElectron() {
    if (process.versions && process.versions.electron) return true;
    if (process.env.ELECTRON_RUN_AS_NODE) return true;
    return "undefined" !== 'undefined' && window.process && window.process.type === 'renderer';
}
function isAlpine(platform) {
    return platform === 'linux' && fs.existsSync('/etc/alpine-release');
}
// Exposed for unit tests
// TODO: move to lib
load.parseTags = parseTags;
load.matchTags = matchTags;
load.compareTags = compareTags;
load.parseTuple = parseTuple;
load.matchTuple = matchTuple;
load.compareTuples = compareTuples;
}),
"[project]/frontend/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t // eslint-disable-line
;
if (typeof runtimeRequire.addon === 'function') {
    module.exports = runtimeRequire.addon.bind(runtimeRequire);
} else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/node-gyp-build/node-gyp-build.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/bufferutil/fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */ const mask = (source, mask, output, offset, length)=>{
    for(var i = 0; i < length; i++){
        output[offset + i] = source[i] ^ mask[i & 3];
    }
};
/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */ const unmask = (buffer, mask)=>{
    // Required until https://github.com/nodejs/node/issues/9006 is resolved.
    const length = buffer.length;
    for(var i = 0; i < length; i++){
        buffer[i] ^= mask[i & 3];
    }
};
module.exports = {
    mask,
    unmask
};
}),
"[project]/frontend/node_modules/bufferutil/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

try {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)")(("TURBOPACK compile-time value", "/ROOT/frontend/node_modules/bufferutil"));
} catch (e) {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/bufferutil/fallback.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    BINARY_TYPES: [
        'nodebuffer',
        'arraybuffer',
        'fragments'
    ],
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
    kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
    kListener: Symbol('kListener'),
    kStatusCode: Symbol('status-code'),
    kWebSocket: Symbol('websocket'),
    NOOP: ()=>{}
};
}),
"[project]/frontend/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { EMPTY_BUFFER } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const FastBuffer = Buffer[Symbol.species];
/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */ function concat(list, totalLength) {
    if (list.length === 0) return EMPTY_BUFFER;
    if (list.length === 1) return list[0];
    const target = Buffer.allocUnsafe(totalLength);
    let offset = 0;
    for(let i = 0; i < list.length; i++){
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
    }
    if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
    }
    return target;
}
/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */ function _mask(source, mask, output, offset, length) {
    for(let i = 0; i < length; i++){
        output[offset + i] = source[i] ^ mask[i & 3];
    }
}
/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */ function _unmask(buffer, mask) {
    for(let i = 0; i < buffer.length; i++){
        buffer[i] ^= mask[i & 3];
    }
}
/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} buf The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 * @public
 */ function toArrayBuffer(buf) {
    if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
}
/**
 * Converts `data` to a `Buffer`.
 *
 * @param {*} data The data to convert
 * @return {Buffer} The buffer
 * @throws {TypeError}
 * @public
 */ function toBuffer(data) {
    toBuffer.readOnly = true;
    if (Buffer.isBuffer(data)) return data;
    let buf;
    if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
    } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
    } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
    }
    return buf;
}
module.exports = {
    concat,
    mask: _mask,
    toArrayBuffer,
    toBuffer,
    unmask: _unmask
};
/* istanbul ignore else  */ if (!process.env.WS_NO_BUFFER_UTIL) {
    try {
        const bufferUtil = __turbopack_context__.r("[project]/frontend/node_modules/bufferutil/index.js [app-ssr] (ecmascript)");
        module.exports.mask = function(source, mask, output, offset, length) {
            if (length < 48) _mask(source, mask, output, offset, length);
            else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
            if (buffer.length < 32) _unmask(buffer, mask);
            else bufferUtil.unmask(buffer, mask);
        };
    } catch (e) {
    // Continue regardless of the error.
    }
}
}),
"[project]/frontend/node_modules/ws/lib/limiter.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const kDone = Symbol('kDone');
const kRun = Symbol('kRun');
/**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */ class Limiter {
    /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */ constructor(concurrency){
        this[kDone] = ()=>{
            this.pending--;
            this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
    }
    /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */ add(job) {
        this.jobs.push(job);
        this[kRun]();
    }
    /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */ [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
            const job = this.jobs.shift();
            this.pending++;
            job(this[kDone]);
        }
    }
}
module.exports = Limiter;
}),
"[project]/frontend/node_modules/ws/lib/permessage-deflate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
const bufferUtil = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)");
const Limiter = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/limiter.js [app-ssr] (ecmascript)");
const { kStatusCode } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const FastBuffer = Buffer[Symbol.species];
const TRAILER = Buffer.from([
    0x00,
    0x00,
    0xff,
    0xff
]);
const kPerMessageDeflate = Symbol('permessage-deflate');
const kTotalLength = Symbol('total-length');
const kCallback = Symbol('callback');
const kBuffers = Symbol('buffers');
const kError = Symbol('error');
//
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//
let zlibLimiter;
/**
 * permessage-deflate implementation.
 */ class PerMessageDeflate {
    /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed if context takeover is disabled
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */ constructor(options, isServer, maxPayload){
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
            const concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
            zlibLimiter = new Limiter(concurrency);
        }
    }
    /**
   * @type {String}
   */ static get extensionName() {
        return 'permessage-deflate';
    }
    /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */ offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
            params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
            params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
            params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
            params.client_max_window_bits = true;
        }
        return params;
    }
    /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */ accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
    }
    /**
   * Releases all resources used by the extension.
   *
   * @public
   */ cleanup() {
        if (this._inflate) {
            this._inflate.close();
            this._inflate = null;
        }
        if (this._deflate) {
            const callback = this._deflate[kCallback];
            this._deflate.close();
            this._deflate = null;
            if (callback) {
                callback(new Error('The deflate stream was closed while data was being processed'));
            }
        }
    }
    /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */ acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params)=>{
            if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === 'number' && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === 'number' && !params.client_max_window_bits) {
                return false;
            }
            return true;
        });
        if (!accepted) {
            throw new Error('None of the extension offers can be accepted');
        }
        if (opts.serverNoContextTakeover) {
            accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
            accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === 'number') {
            accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === 'number') {
            accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
            delete accepted.client_max_window_bits;
        }
        return accepted;
    }
    /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */ acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
            throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
            if (typeof this._options.clientMaxWindowBits === 'number') {
                params.client_max_window_bits = this._options.clientMaxWindowBits;
            }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === 'number' && params.client_max_window_bits > this._options.clientMaxWindowBits) {
            throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        }
        return params;
    }
    /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */ normalizeParams(configurations) {
        configurations.forEach((params)=>{
            Object.keys(params).forEach((key)=>{
                let value = params[key];
                if (value.length > 1) {
                    throw new Error(`Parameter "${key}" must have only a single value`);
                }
                value = value[0];
                if (key === 'client_max_window_bits') {
                    if (value !== true) {
                        const num = +value;
                        if (!Number.isInteger(num) || num < 8 || num > 15) {
                            throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                        }
                        value = num;
                    } else if (!this._isServer) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                } else if (key === 'server_max_window_bits') {
                    const num = +value;
                    if (!Number.isInteger(num) || num < 8 || num > 15) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                    value = num;
                } else if (key === 'client_no_context_takeover' || key === 'server_no_context_takeover') {
                    if (value !== true) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                } else {
                    throw new Error(`Unknown parameter "${key}"`);
                }
                params[key] = value;
            });
        });
        return configurations;
    }
    /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ decompress(data, fin, callback) {
        zlibLimiter.add((done)=>{
            this._decompress(data, fin, (err, result)=>{
                done();
                callback(err, result);
            });
        });
    }
    /**
   * Compress data. Concurrency limited.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ compress(data, fin, callback) {
        zlibLimiter.add((done)=>{
            this._compress(data, fin, (err, result)=>{
                done();
                callback(err, result);
            });
        });
    }
    /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ _decompress(data, fin, callback) {
        const endpoint = this._isServer ? 'client' : 'server';
        if (!this._inflate) {
            const key = `${endpoint}_max_window_bits`;
            const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
            this._inflate = zlib.createInflateRaw({
                ...this._options.zlibInflateOptions,
                windowBits
            });
            this._inflate[kPerMessageDeflate] = this;
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            this._inflate.on('error', inflateOnError);
            this._inflate.on('data', inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(()=>{
            const err = this._inflate[kError];
            if (err) {
                this._inflate.close();
                this._inflate = null;
                callback(err);
                return;
            }
            const data = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
            if (this._inflate._readableState.endEmitted) {
                this._inflate.close();
                this._inflate = null;
            } else {
                this._inflate[kTotalLength] = 0;
                this._inflate[kBuffers] = [];
                if (fin && this.params[`${endpoint}_no_context_takeover`]) {
                    this._inflate.reset();
                }
            }
            callback(null, data);
        });
    }
    /**
   * Compress data.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ _compress(data, fin, callback) {
        const endpoint = this._isServer ? 'server' : 'client';
        if (!this._deflate) {
            const key = `${endpoint}_max_window_bits`;
            const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
            this._deflate = zlib.createDeflateRaw({
                ...this._options.zlibDeflateOptions,
                windowBits
            });
            this._deflate[kTotalLength] = 0;
            this._deflate[kBuffers] = [];
            this._deflate.on('data', deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, ()=>{
            if (!this._deflate) {
                //
                // The deflate stream was closed while data was being processed.
                //
                return;
            }
            let data = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
            if (fin) {
                data = new FastBuffer(data.buffer, data.byteOffset, data.length - 4);
            }
            //
            // Ensure that the callback will not be called again in
            // `PerMessageDeflate#cleanup()`.
            //
            this._deflate[kCallback] = null;
            this._deflate[kTotalLength] = 0;
            this._deflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
                this._deflate.reset();
            }
            callback(null, data);
        });
    }
}
module.exports = PerMessageDeflate;
/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function deflateOnData(chunk) {
    this[kBuffers].push(chunk);
    this[kTotalLength] += chunk.length;
}
/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function inflateOnData(chunk) {
    this[kTotalLength] += chunk.length;
    if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
    }
    this[kError] = new RangeError('Max payload size exceeded');
    this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
    this[kError][kStatusCode] = 1009;
    this.removeListener('data', inflateOnData);
    this.reset();
}
/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */ function inflateOnError(err) {
    //
    // There is no need to call `Zlib#close()` as the handle is automatically
    // closed when an error is emitted.
    //
    this[kPerMessageDeflate]._inflate = null;
    err[kStatusCode] = 1007;
    this[kCallback](err);
}
}),
"[project]/frontend/node_modules/ws/lib/validation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { isUtf8 } = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
//
// Allowed token characters:
//
// '!', '#', '$', '%', '&', ''', '*', '+', '-',
// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
//
// tokenChars[32] === 0 // ' '
// tokenChars[33] === 1 // '!'
// tokenChars[34] === 0 // '"'
// ...
//
// prettier-ignore
const tokenChars = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0 // 112 - 127
];
/**
 * Checks if a status code is allowed in a close frame.
 *
 * @param {Number} code The status code
 * @return {Boolean} `true` if the status code is valid, else `false`
 * @public
 */ function isValidStatusCode(code) {
    return code >= 1000 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3000 && code <= 4999;
}
/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */ function _isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while(i < len){
        if ((buf[i] & 0x80) === 0) {
            // 0xxxxxxx
            i++;
        } else if ((buf[i] & 0xe0) === 0xc0) {
            // 110xxxxx 10xxxxxx
            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // Overlong
            ) {
                return false;
            }
            i += 2;
        } else if ((buf[i] & 0xf0) === 0xe0) {
            // 1110xxxx 10xxxxxx 10xxxxxx
            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // Surrogate (U+D800 - U+DFFF)
            ) {
                return false;
            }
            i += 3;
        } else if ((buf[i] & 0xf8) === 0xf0) {
            // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF
            ) {
                return false;
            }
            i += 4;
        } else {
            return false;
        }
    }
    return true;
}
module.exports = {
    isValidStatusCode,
    isValidUTF8: _isValidUTF8,
    tokenChars
};
if (isUtf8) {
    module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
    };
} else if (!process.env.WS_NO_UTF_8_VALIDATE) {
    try {
        const isValidUTF8 = __turbopack_context__.r("[project]/frontend/node_modules/utf-8-validate/index.js [app-ssr] (ecmascript)");
        module.exports.isValidUTF8 = function(buf) {
            return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
    } catch (e) {
    // Continue regardless of the error.
    }
}
}),
"[project]/frontend/node_modules/ws/lib/receiver.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Writable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/permessage-deflate.js [app-ssr] (ecmascript)");
const { BINARY_TYPES, EMPTY_BUFFER, kStatusCode, kWebSocket } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const { concat, toArrayBuffer, unmask } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)");
const { isValidStatusCode, isValidUTF8 } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/validation.js [app-ssr] (ecmascript)");
const FastBuffer = Buffer[Symbol.species];
const GET_INFO = 0;
const GET_PAYLOAD_LENGTH_16 = 1;
const GET_PAYLOAD_LENGTH_64 = 2;
const GET_MASK = 3;
const GET_DATA = 4;
const INFLATING = 5;
const DEFER_EVENT = 6;
/**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */ class Receiver extends Writable {
    /**
   * Creates a Receiver instance.
   *
   * @param {Object} [options] Options object
   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {String} [options.binaryType=nodebuffer] The type for binary data
   * @param {Object} [options.extensions] An object containing the negotiated
   *     extensions
   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
   *     client or server mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   */ constructor(options = {}){
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== undefined ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = undefined;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = undefined;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
    }
    /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */ _write(chunk, encoding, cb) {
        if (this._opcode === 0x08 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
    }
    /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */ consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
            const buf = this._buffers[0];
            this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
            return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
            const buf = this._buffers[0];
            const offset = dst.length - n;
            if (n >= buf.length) {
                dst.set(this._buffers.shift(), offset);
            } else {
                dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
                this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
            }
            n -= buf.length;
        }while (n > 0)
        return dst;
    }
    /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */ startLoop(cb) {
        this._loop = true;
        do {
            switch(this._state){
                case GET_INFO:
                    this.getInfo(cb);
                    break;
                case GET_PAYLOAD_LENGTH_16:
                    this.getPayloadLength16(cb);
                    break;
                case GET_PAYLOAD_LENGTH_64:
                    this.getPayloadLength64(cb);
                    break;
                case GET_MASK:
                    this.getMask();
                    break;
                case GET_DATA:
                    this.getData(cb);
                    break;
                case INFLATING:
                case DEFER_EVENT:
                    this._loop = false;
                    return;
            }
        }while (this._loop)
        if (!this._errored) cb();
    }
    /**
   * Reads the first two bytes of a frame.
   *
   * @param {Function} cb Callback
   * @private
   */ getInfo(cb) {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 0x30) !== 0x00) {
            const error = this.createError(RangeError, 'RSV2 and RSV3 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_2_3');
            cb(error);
            return;
        }
        const compressed = (buf[0] & 0x40) === 0x40;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
            const error = this.createError(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
            cb(error);
            return;
        }
        this._fin = (buf[0] & 0x80) === 0x80;
        this._opcode = buf[0] & 0x0f;
        this._payloadLength = buf[1] & 0x7f;
        if (this._opcode === 0x00) {
            if (compressed) {
                const error = this.createError(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
                cb(error);
                return;
            }
            if (!this._fragmented) {
                const error = this.createError(RangeError, 'invalid opcode 0', true, 1002, 'WS_ERR_INVALID_OPCODE');
                cb(error);
                return;
            }
            this._opcode = this._fragmented;
        } else if (this._opcode === 0x01 || this._opcode === 0x02) {
            if (this._fragmented) {
                const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
                cb(error);
                return;
            }
            this._compressed = compressed;
        } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
            if (!this._fin) {
                const error = this.createError(RangeError, 'FIN must be set', true, 1002, 'WS_ERR_EXPECTED_FIN');
                cb(error);
                return;
            }
            if (compressed) {
                const error = this.createError(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
                cb(error);
                return;
            }
            if (this._payloadLength > 0x7d || this._opcode === 0x08 && this._payloadLength === 1) {
                const error = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
                cb(error);
                return;
            }
        } else {
            const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
            cb(error);
            return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 0x80) === 0x80;
        if (this._isServer) {
            if (!this._masked) {
                const error = this.createError(RangeError, 'MASK must be set', true, 1002, 'WS_ERR_EXPECTED_MASK');
                cb(error);
                return;
            }
        } else if (this._masked) {
            const error = this.createError(RangeError, 'MASK must be clear', true, 1002, 'WS_ERR_UNEXPECTED_MASK');
            cb(error);
            return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
    }
    /**
   * Gets extended payload length (7+16).
   *
   * @param {Function} cb Callback
   * @private
   */ getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
    }
    /**
   * Gets extended payload length (7+64).
   *
   * @param {Function} cb Callback
   * @private
   */ getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
            this._loop = false;
            return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        //
        // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
        // if payload length is greater than this number.
        //
        if (num > Math.pow(2, 53 - 32) - 1) {
            const error = this.createError(RangeError, 'Unsupported WebSocket frame: payload length > 2^53 - 1', false, 1009, 'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH');
            cb(error);
            return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
    }
    /**
   * Payload length has been read.
   *
   * @param {Function} cb Callback
   * @private
   */ haveLength(cb) {
        if (this._payloadLength && this._opcode < 0x08) {
            this._totalPayloadLength += this._payloadLength;
            if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
                const error = this.createError(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
                cb(error);
                return;
            }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
    }
    /**
   * Reads mask bytes.
   *
   * @private
   */ getMask() {
        if (this._bufferedBytes < 4) {
            this._loop = false;
            return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
    }
    /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @private
   */ getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
            if (this._bufferedBytes < this._payloadLength) {
                this._loop = false;
                return;
            }
            data = this.consume(this._payloadLength);
            if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
                unmask(data, this._mask);
            }
        }
        if (this._opcode > 0x07) {
            this.controlMessage(data, cb);
            return;
        }
        if (this._compressed) {
            this._state = INFLATING;
            this.decompress(data, cb);
            return;
        }
        if (data.length) {
            //
            // This message is not compressed so its length is the sum of the payload
            // length of all fragments.
            //
            this._messageLength = this._totalPayloadLength;
            this._fragments.push(data);
        }
        this.dataMessage(cb);
    }
    /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */ decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf)=>{
            if (err) return cb(err);
            if (buf.length) {
                this._messageLength += buf.length;
                if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
                    const error = this.createError(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
                    cb(error);
                    return;
                }
                this._fragments.push(buf);
            }
            this.dataMessage(cb);
            if (this._state === GET_INFO) this.startLoop(cb);
        });
    }
    /**
   * Handles a data message.
   *
   * @param {Function} cb Callback
   * @private
   */ dataMessage(cb) {
        if (!this._fin) {
            this._state = GET_INFO;
            return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
            let data;
            if (this._binaryType === 'nodebuffer') {
                data = concat(fragments, messageLength);
            } else if (this._binaryType === 'arraybuffer') {
                data = toArrayBuffer(concat(fragments, messageLength));
            } else {
                data = fragments;
            }
            if (this._allowSynchronousEvents) {
                this.emit('message', data, true);
                this._state = GET_INFO;
            } else {
                this._state = DEFER_EVENT;
                setImmediate(()=>{
                    this.emit('message', data, true);
                    this._state = GET_INFO;
                    this.startLoop(cb);
                });
            }
        } else {
            const buf = concat(fragments, messageLength);
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                const error = this.createError(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                cb(error);
                return;
            }
            if (this._state === INFLATING || this._allowSynchronousEvents) {
                this.emit('message', buf, false);
                this._state = GET_INFO;
            } else {
                this._state = DEFER_EVENT;
                setImmediate(()=>{
                    this.emit('message', buf, false);
                    this._state = GET_INFO;
                    this.startLoop(cb);
                });
            }
        }
    }
    /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */ controlMessage(data, cb) {
        if (this._opcode === 0x08) {
            if (data.length === 0) {
                this._loop = false;
                this.emit('conclude', 1005, EMPTY_BUFFER);
                this.end();
            } else {
                const code = data.readUInt16BE(0);
                if (!isValidStatusCode(code)) {
                    const error = this.createError(RangeError, `invalid status code ${code}`, true, 1002, 'WS_ERR_INVALID_CLOSE_CODE');
                    cb(error);
                    return;
                }
                const buf = new FastBuffer(data.buffer, data.byteOffset + 2, data.length - 2);
                if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                    const error = this.createError(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                    cb(error);
                    return;
                }
                this._loop = false;
                this.emit('conclude', code, buf);
                this.end();
            }
            this._state = GET_INFO;
            return;
        }
        if (this._allowSynchronousEvents) {
            this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
            this._state = GET_INFO;
        } else {
            this._state = DEFER_EVENT;
            setImmediate(()=>{
                this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
                this._state = GET_INFO;
                this.startLoop(cb);
            });
        }
    }
    /**
   * Builds an error object.
   *
   * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
   * @param {String} message The error message
   * @param {Boolean} prefix Specifies whether or not to add a default prefix to
   *     `message`
   * @param {Number} statusCode The status code
   * @param {String} errorCode The exposed error code
   * @return {(Error|RangeError)} The error
   * @private
   */ createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
    }
}
module.exports = Receiver;
}),
"[project]/frontend/node_modules/ws/lib/sender.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex" }] */ const { Duplex } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const { randomFillSync } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/permessage-deflate.js [app-ssr] (ecmascript)");
const { EMPTY_BUFFER } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const { isValidStatusCode } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/validation.js [app-ssr] (ecmascript)");
const { mask: applyMask, toBuffer } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)");
const kByteLength = Symbol('kByteLength');
const maskBuffer = Buffer.alloc(4);
const RANDOM_POOL_SIZE = 8 * 1024;
let randomPool;
let randomPoolPointer = RANDOM_POOL_SIZE;
/**
 * HyBi Sender implementation.
 */ class Sender {
    /**
   * Creates a Sender instance.
   *
   * @param {Duplex} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Function} [generateMask] The function used to generate the masking
   *     key
   */ constructor(socket, extensions, generateMask){
        this._extensions = extensions || {};
        if (generateMask) {
            this._generateMask = generateMask;
            this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
    }
    /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */ static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
            mask = options.maskBuffer || maskBuffer;
            if (options.generateMask) {
                options.generateMask(mask);
            } else {
                if (randomPoolPointer === RANDOM_POOL_SIZE) {
                    /* istanbul ignore else  */ if (randomPool === undefined) {
                        //
                        // This is lazily initialized because server-sent frames must not
                        // be masked so it may never be used.
                        //
                        randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
                    }
                    randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
                    randomPoolPointer = 0;
                }
                mask[0] = randomPool[randomPoolPointer++];
                mask[1] = randomPool[randomPoolPointer++];
                mask[2] = randomPool[randomPoolPointer++];
                mask[3] = randomPool[randomPoolPointer++];
            }
            skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
            offset = 6;
        }
        let dataLength;
        if (typeof data === 'string') {
            if ((!options.mask || skipMasking) && options[kByteLength] !== undefined) {
                dataLength = options[kByteLength];
            } else {
                data = Buffer.from(data);
                dataLength = data.length;
            }
        } else {
            dataLength = data.length;
            merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
            offset += 8;
            payloadLength = 127;
        } else if (dataLength > 125) {
            offset += 2;
            payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
        if (options.rsv1) target[0] |= 0x40;
        target[1] = payloadLength;
        if (payloadLength === 126) {
            target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
            target[2] = target[3] = 0;
            target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [
            target,
            data
        ];
        target[1] |= 0x80;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [
            target,
            data
        ];
        if (merge) {
            applyMask(data, mask, target, offset, dataLength);
            return [
                target
            ];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [
            target,
            data
        ];
    }
    /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {(String|Buffer)} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */ close(code, data, mask, cb) {
        let buf;
        if (code === undefined) {
            buf = EMPTY_BUFFER;
        } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
            throw new TypeError('First argument must be a valid error code number');
        } else if (data === undefined || !data.length) {
            buf = Buffer.allocUnsafe(2);
            buf.writeUInt16BE(code, 0);
        } else {
            const length = Buffer.byteLength(data);
            if (length > 123) {
                throw new RangeError('The message must not be greater than 123 bytes');
            }
            buf = Buffer.allocUnsafe(2 + length);
            buf.writeUInt16BE(code, 0);
            if (typeof data === 'string') {
                buf.write(data, 2);
            } else {
                buf.set(data, 2);
            }
        }
        const options = {
            [kByteLength]: buf.length,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 0x08,
            readOnly: false,
            rsv1: false
        };
        if (this._deflating) {
            this.enqueue([
                this.dispatch,
                buf,
                false,
                options,
                cb
            ]);
        } else {
            this.sendFrame(Sender.frame(buf, options), cb);
        }
    }
    /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === 'string') {
            byteLength = Buffer.byteLength(data);
            readOnly = false;
        } else {
            data = toBuffer(data);
            byteLength = data.length;
            readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
            throw new RangeError('The data size must not be greater than 125 bytes');
        }
        const options = {
            [kByteLength]: byteLength,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 0x09,
            readOnly,
            rsv1: false
        };
        if (this._deflating) {
            this.enqueue([
                this.dispatch,
                data,
                false,
                options,
                cb
            ]);
        } else {
            this.sendFrame(Sender.frame(data, options), cb);
        }
    }
    /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === 'string') {
            byteLength = Buffer.byteLength(data);
            readOnly = false;
        } else {
            data = toBuffer(data);
            byteLength = data.length;
            readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
            throw new RangeError('The data size must not be greater than 125 bytes');
        }
        const options = {
            [kByteLength]: byteLength,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 0x0a,
            readOnly,
            rsv1: false
        };
        if (this._deflating) {
            this.enqueue([
                this.dispatch,
                data,
                false,
                options,
                cb
            ]);
        } else {
            this.sendFrame(Sender.frame(data, options), cb);
        }
    }
    /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */ send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === 'string') {
            byteLength = Buffer.byteLength(data);
            readOnly = false;
        } else {
            data = toBuffer(data);
            byteLength = data.length;
            readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
            this._firstFragment = false;
            if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? 'server_no_context_takeover' : 'client_no_context_takeover']) {
                rsv1 = byteLength >= perMessageDeflate._threshold;
            }
            this._compress = rsv1;
        } else {
            rsv1 = false;
            opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        if (perMessageDeflate) {
            const opts = {
                [kByteLength]: byteLength,
                fin: options.fin,
                generateMask: this._generateMask,
                mask: options.mask,
                maskBuffer: this._maskBuffer,
                opcode,
                readOnly,
                rsv1
            };
            if (this._deflating) {
                this.enqueue([
                    this.dispatch,
                    data,
                    this._compress,
                    opts,
                    cb
                ]);
            } else {
                this.dispatch(data, this._compress, opts, cb);
            }
        } else {
            this.sendFrame(Sender.frame(data, {
                [kByteLength]: byteLength,
                fin: options.fin,
                generateMask: this._generateMask,
                mask: options.mask,
                maskBuffer: this._maskBuffer,
                opcode,
                readOnly,
                rsv1: false
            }), cb);
        }
    }
    /**
   * Dispatches a message.
   *
   * @param {(Buffer|String)} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */ dispatch(data, compress, options, cb) {
        if (!compress) {
            this.sendFrame(Sender.frame(data, options), cb);
            return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._deflating = true;
        perMessageDeflate.compress(data, options.fin, (_, buf)=>{
            if (this._socket.destroyed) {
                const err = new Error('The socket was closed while data was being compressed');
                if (typeof cb === 'function') cb(err);
                for(let i = 0; i < this._queue.length; i++){
                    const params = this._queue[i];
                    const callback = params[params.length - 1];
                    if (typeof callback === 'function') callback(err);
                }
                return;
            }
            this._bufferedBytes -= options[kByteLength];
            this._deflating = false;
            options.readOnly = false;
            this.sendFrame(Sender.frame(buf, options), cb);
            this.dequeue();
        });
    }
    /**
   * Executes queued send operations.
   *
   * @private
   */ dequeue() {
        while(!this._deflating && this._queue.length){
            const params = this._queue.shift();
            this._bufferedBytes -= params[3][kByteLength];
            Reflect.apply(params[0], this, params.slice(1));
        }
    }
    /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */ enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
    }
    /**
   * Sends a frame.
   *
   * @param {Buffer[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */ sendFrame(list, cb) {
        if (list.length === 2) {
            this._socket.cork();
            this._socket.write(list[0]);
            this._socket.write(list[1], cb);
            this._socket.uncork();
        } else {
            this._socket.write(list[0], cb);
        }
    }
}
module.exports = Sender;
}),
"[project]/frontend/node_modules/ws/lib/event-target.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { kForOnEventAttribute, kListener } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const kCode = Symbol('kCode');
const kData = Symbol('kData');
const kError = Symbol('kError');
const kMessage = Symbol('kMessage');
const kReason = Symbol('kReason');
const kTarget = Symbol('kTarget');
const kType = Symbol('kType');
const kWasClean = Symbol('kWasClean');
/**
 * Class representing an event.
 */ class Event {
    /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @throws {TypeError} If the `type` argument is not specified
   */ constructor(type){
        this[kTarget] = null;
        this[kType] = type;
    }
    /**
   * @type {*}
   */ get target() {
        return this[kTarget];
    }
    /**
   * @type {String}
   */ get type() {
        return this[kType];
    }
}
Object.defineProperty(Event.prototype, 'target', {
    enumerable: true
});
Object.defineProperty(Event.prototype, 'type', {
    enumerable: true
});
/**
 * Class representing a close event.
 *
 * @extends Event
 */ class CloseEvent extends Event {
    /**
   * Create a new `CloseEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {Number} [options.code=0] The status code explaining why the
   *     connection was closed
   * @param {String} [options.reason=''] A human-readable string explaining why
   *     the connection was closed
   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
   *     connection was cleanly closed
   */ constructor(type, options = {}){
        super(type);
        this[kCode] = options.code === undefined ? 0 : options.code;
        this[kReason] = options.reason === undefined ? '' : options.reason;
        this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
    }
    /**
   * @type {Number}
   */ get code() {
        return this[kCode];
    }
    /**
   * @type {String}
   */ get reason() {
        return this[kReason];
    }
    /**
   * @type {Boolean}
   */ get wasClean() {
        return this[kWasClean];
    }
}
Object.defineProperty(CloseEvent.prototype, 'code', {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'reason', {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'wasClean', {
    enumerable: true
});
/**
 * Class representing an error event.
 *
 * @extends Event
 */ class ErrorEvent extends Event {
    /**
   * Create a new `ErrorEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.error=null] The error that generated this event
   * @param {String} [options.message=''] The error message
   */ constructor(type, options = {}){
        super(type);
        this[kError] = options.error === undefined ? null : options.error;
        this[kMessage] = options.message === undefined ? '' : options.message;
    }
    /**
   * @type {*}
   */ get error() {
        return this[kError];
    }
    /**
   * @type {String}
   */ get message() {
        return this[kMessage];
    }
}
Object.defineProperty(ErrorEvent.prototype, 'error', {
    enumerable: true
});
Object.defineProperty(ErrorEvent.prototype, 'message', {
    enumerable: true
});
/**
 * Class representing a message event.
 *
 * @extends Event
 */ class MessageEvent extends Event {
    /**
   * Create a new `MessageEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.data=null] The message content
   */ constructor(type, options = {}){
        super(type);
        this[kData] = options.data === undefined ? null : options.data;
    }
    /**
   * @type {*}
   */ get data() {
        return this[kData];
    }
}
Object.defineProperty(MessageEvent.prototype, 'data', {
    enumerable: true
});
/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */ const EventTarget = {
    /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {(Function|Object)} handler The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */ addEventListener (type, handler, options = {}) {
        for (const listener of this.listeners(type)){
            if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
                return;
            }
        }
        let wrapper;
        if (type === 'message') {
            wrapper = function onMessage(data, isBinary) {
                const event = new MessageEvent('message', {
                    data: isBinary ? data : data.toString()
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type === 'close') {
            wrapper = function onClose(code, message) {
                const event = new CloseEvent('close', {
                    code,
                    reason: message.toString(),
                    wasClean: this._closeFrameReceived && this._closeFrameSent
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type === 'error') {
            wrapper = function onError(error) {
                const event = new ErrorEvent('error', {
                    error,
                    message: error.message
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type === 'open') {
            wrapper = function onOpen() {
                const event = new Event('open');
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else {
            return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
            this.once(type, wrapper);
        } else {
            this.on(type, wrapper);
        }
    },
    /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {(Function|Object)} handler The listener to remove
   * @public
   */ removeEventListener (type, handler) {
        for (const listener of this.listeners(type)){
            if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
                this.removeListener(type, listener);
                break;
            }
        }
    }
};
module.exports = {
    CloseEvent,
    ErrorEvent,
    Event,
    EventTarget,
    MessageEvent
};
/**
 * Call an event listener
 *
 * @param {(Function|Object)} listener The listener to call
 * @param {*} thisArg The value to use as `this`` when calling the listener
 * @param {Event} event The event to pass to the listener
 * @private
 */ function callListener(listener, thisArg, event) {
    if (typeof listener === 'object' && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
    } else {
        listener.call(thisArg, event);
    }
}
}),
"[project]/frontend/node_modules/ws/lib/extension.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { tokenChars } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/validation.js [app-ssr] (ecmascript)");
/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */ function push(dest, name, elem) {
    if (dest[name] === undefined) dest[name] = [
        elem
    ];
    else dest[name].push(elem);
}
/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */ function parse(header) {
    const offers = Object.create(null);
    let params = Object.create(null);
    let mustUnescape = false;
    let isEscaping = false;
    let inQuotes = false;
    let extensionName;
    let paramName;
    let start = -1;
    let code = -1;
    let end = -1;
    let i = 0;
    for(; i < header.length; i++){
        code = header.charCodeAt(i);
        if (extensionName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (i !== 0 && (code === 0x20 /* ' ' */  || code === 0x09)) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 0x3b /* ';' */  || code === 0x2c /* ',' */ ) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                const name = header.slice(start, end);
                if (code === 0x2c) {
                    push(offers, name, params);
                    params = Object.create(null);
                } else {
                    extensionName = name;
                }
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else if (paramName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (code === 0x20 || code === 0x09) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 0x3b || code === 0x2c) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                push(params, header.slice(start, end), true);
                if (code === 0x2c) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                start = end = -1;
            } else if (code === 0x3d /* '=' */  && start !== -1 && end === -1) {
                paramName = header.slice(start, i);
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else {
            //
            // The value of a quoted-string after unescaping must conform to the
            // token ABNF, so only token characters are valid.
            // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
            //
            if (isEscaping) {
                if (tokenChars[code] !== 1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (start === -1) start = i;
                else if (!mustUnescape) mustUnescape = true;
                isEscaping = false;
            } else if (inQuotes) {
                if (tokenChars[code] === 1) {
                    if (start === -1) start = i;
                } else if (code === 0x22 /* '"' */  && start !== -1) {
                    inQuotes = false;
                    end = i;
                } else if (code === 0x5c /* '\' */ ) {
                    isEscaping = true;
                } else {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
            } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
                inQuotes = true;
            } else if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
                if (end === -1) end = i;
            } else if (code === 0x3b || code === 0x2c) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                let value = header.slice(start, end);
                if (mustUnescape) {
                    value = value.replace(/\\/g, '');
                    mustUnescape = false;
                }
                push(params, paramName, value);
                if (code === 0x2c) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                paramName = undefined;
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        }
    }
    if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
        throw new SyntaxError('Unexpected end of input');
    }
    if (end === -1) end = i;
    const token = header.slice(start, end);
    if (extensionName === undefined) {
        push(offers, token, params);
    } else {
        if (paramName === undefined) {
            push(params, token, true);
        } else if (mustUnescape) {
            push(params, paramName, token.replace(/\\/g, ''));
        } else {
            push(params, paramName, token);
        }
        push(offers, extensionName, params);
    }
    return offers;
}
/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */ function format(extensions) {
    return Object.keys(extensions).map((extension)=>{
        let configurations = extensions[extension];
        if (!Array.isArray(configurations)) configurations = [
            configurations
        ];
        return configurations.map((params)=>{
            return [
                extension
            ].concat(Object.keys(params).map((k)=>{
                let values = params[k];
                if (!Array.isArray(values)) values = [
                    values
                ];
                return values.map((v)=>v === true ? k : `${k}=${v}`).join('; ');
            })).join('; ');
        }).join(', ');
    }).join(', ');
}
module.exports = {
    format,
    parse
};
}),
"[project]/frontend/node_modules/ws/lib/websocket.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex|Readable$", "caughtErrors": "none" }] */ const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const net = __turbopack_context__.r("[externals]/net [external] (net, cjs)");
const tls = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)");
const { randomBytes, createHash } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const { Duplex, Readable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const { URL } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const PerMessageDeflate = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/permessage-deflate.js [app-ssr] (ecmascript)");
const Receiver = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/receiver.js [app-ssr] (ecmascript)");
const Sender = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/sender.js [app-ssr] (ecmascript)");
const { BINARY_TYPES, EMPTY_BUFFER, GUID, kForOnEventAttribute, kListener, kStatusCode, kWebSocket, NOOP } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/constants.js [app-ssr] (ecmascript)");
const { EventTarget: { addEventListener, removeEventListener } } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/event-target.js [app-ssr] (ecmascript)");
const { format, parse } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/extension.js [app-ssr] (ecmascript)");
const { toBuffer } = __turbopack_context__.r("[project]/frontend/node_modules/ws/lib/buffer-util.js [app-ssr] (ecmascript)");
const closeTimeout = 30 * 1000;
const kAborted = Symbol('kAborted');
const protocolVersions = [
    8,
    13
];
const readyStates = [
    'CONNECTING',
    'OPEN',
    'CLOSING',
    'CLOSED'
];
const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */ class WebSocket extends EventEmitter {
    /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */ constructor(address, protocols, options){
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._extensions = {};
        this._paused = false;
        this._protocol = '';
        this._readyState = WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
            this._bufferedAmount = 0;
            this._isServer = false;
            this._redirects = 0;
            if (protocols === undefined) {
                protocols = [];
            } else if (!Array.isArray(protocols)) {
                if (typeof protocols === 'object' && protocols !== null) {
                    options = protocols;
                    protocols = [];
                } else {
                    protocols = [
                        protocols
                    ];
                }
            }
            initAsClient(this, address, protocols, options);
        } else {
            this._autoPong = options.autoPong;
            this._isServer = true;
        }
    }
    /**
   * This deviates from the WHATWG interface since ws doesn't support the
   * required default "blob" type (instead we define a custom "nodebuffer"
   * type).
   *
   * @type {String}
   */ get binaryType() {
        return this._binaryType;
    }
    set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        //
        // Allow to change `binaryType` on the fly.
        //
        if (this._receiver) this._receiver._binaryType = type;
    }
    /**
   * @type {Number}
   */ get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    /**
   * @type {String}
   */ get extensions() {
        return Object.keys(this._extensions).join();
    }
    /**
   * @type {Boolean}
   */ get isPaused() {
        return this._paused;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onclose() {
        return null;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onerror() {
        return null;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onopen() {
        return null;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onmessage() {
        return null;
    }
    /**
   * @type {String}
   */ get protocol() {
        return this._protocol;
    }
    /**
   * @type {Number}
   */ get readyState() {
        return this._readyState;
    }
    /**
   * @type {String}
   */ get url() {
        return this._url;
    }
    /**
   * Set up the socket and the internal resources.
   *
   * @param {Duplex} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Object} options Options object
   * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.maxPayload=0] The maximum allowed message size
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */ setSocket(socket, head, options) {
        const receiver = new Receiver({
            allowSynchronousEvents: options.allowSynchronousEvents,
            binaryType: this.binaryType,
            extensions: this._extensions,
            isServer: this._isServer,
            maxPayload: options.maxPayload,
            skipUTF8Validation: options.skipUTF8Validation
        });
        this._sender = new Sender(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._socket = socket;
        receiver[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on('conclude', receiverOnConclude);
        receiver.on('drain', receiverOnDrain);
        receiver.on('error', receiverOnError);
        receiver.on('message', receiverOnMessage);
        receiver.on('ping', receiverOnPing);
        receiver.on('pong', receiverOnPong);
        //
        // These methods may not be available if `socket` is just a `Duplex`.
        //
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on('close', socketOnClose);
        socket.on('data', socketOnData);
        socket.on('end', socketOnEnd);
        socket.on('error', socketOnError);
        this._readyState = WebSocket.OPEN;
        this.emit('open');
    }
    /**
   * Emit the `'close'` event.
   *
   * @private
   */ emitClose() {
        if (!this._socket) {
            this._readyState = WebSocket.CLOSED;
            this.emit('close', this._closeCode, this._closeMessage);
            return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
            this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = WebSocket.CLOSED;
        this.emit('close', this._closeCode, this._closeMessage);
    }
    /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {(String|Buffer)} [data] The reason why the connection is
   *     closing
   * @public
   */ close(code, data) {
        if (this.readyState === WebSocket.CLOSED) return;
        if (this.readyState === WebSocket.CONNECTING) {
            const msg = 'WebSocket was closed before the connection was established';
            abortHandshake(this, this._req, msg);
            return;
        }
        if (this.readyState === WebSocket.CLOSING) {
            if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
                this._socket.end();
            }
            return;
        }
        this._readyState = WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err)=>{
            //
            // This error is handled by the `'error'` listener on the socket. We only
            // want to know if the close frame has been sent here.
            //
            if (err) return;
            this._closeFrameSent = true;
            if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
                this._socket.end();
            }
        });
        //
        // Specify a timeout for the closing handshake to complete.
        //
        this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), closeTimeout);
    }
    /**
   * Pause the socket.
   *
   * @public
   */ pause() {
        if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
            return;
        }
        this._paused = true;
        this._socket.pause();
    }
    /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */ ping(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof data === 'function') {
            cb = data;
            data = mask = undefined;
        } else if (typeof mask === 'function') {
            cb = mask;
            mask = undefined;
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === undefined) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }
    /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */ pong(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof data === 'function') {
            cb = data;
            data = mask = undefined;
        } else if (typeof mask === 'function') {
            cb = mask;
            mask = undefined;
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === undefined) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }
    /**
   * Resume the socket.
   *
   * @public
   */ resume() {
        if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
            return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
    }
    /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */ send(data, options, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof options === 'function') {
            cb = options;
            options = {};
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        const opts = {
            binary: typeof data !== 'string',
            mask: !this._isServer,
            compress: true,
            fin: true,
            ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
            opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }
    /**
   * Forcibly close the connection.
   *
   * @public
   */ terminate() {
        if (this.readyState === WebSocket.CLOSED) return;
        if (this.readyState === WebSocket.CONNECTING) {
            const msg = 'WebSocket was closed before the connection was established';
            abortHandshake(this, this._req, msg);
            return;
        }
        if (this._socket) {
            this._readyState = WebSocket.CLOSING;
            this._socket.destroy();
        }
    }
}
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
[
    'binaryType',
    'bufferedAmount',
    'extensions',
    'isPaused',
    'protocol',
    'readyState',
    'url'
].forEach((property)=>{
    Object.defineProperty(WebSocket.prototype, property, {
        enumerable: true
    });
});
//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
[
    'open',
    'error',
    'close',
    'message'
].forEach((method)=>{
    Object.defineProperty(WebSocket.prototype, `on${method}`, {
        enumerable: true,
        get () {
            for (const listener of this.listeners(method)){
                if (listener[kForOnEventAttribute]) return listener[kListener];
            }
            return null;
        },
        set (handler) {
            for (const listener of this.listeners(method)){
                if (listener[kForOnEventAttribute]) {
                    this.removeListener(method, listener);
                    break;
                }
            }
            if (typeof handler !== 'function') return;
            this.addEventListener(method, handler, {
                [kForOnEventAttribute]: true
            });
        }
    });
});
WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;
module.exports = WebSocket;
/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {Array} protocols The subprotocols
 * @param {Object} [options] Connection options
 * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether any
 *     of the `'message'`, `'ping'`, and `'pong'` events can be emitted multiple
 *     times in the same tick
 * @param {Boolean} [options.autoPong=true] Specifies whether or not to
 *     automatically send a pong in response to a ping
 * @param {Function} [options.finishRequest] A function which can be used to
 *     customize the headers of each http request before it is sent
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Function} [options.generateMask] The function used to generate the
 *     masking key
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
 *     not to skip UTF-8 validation for text and close messages
 * @private
 */ function initAsClient(websocket, address, protocols, options) {
    const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: undefined,
        hostname: undefined,
        protocol: undefined,
        timeout: undefined,
        method: 'GET',
        host: undefined,
        path: undefined,
        port: undefined
    };
    websocket._autoPong = opts.autoPong;
    if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} ` + `(supported versions: ${protocolVersions.join(', ')})`);
    }
    let parsedUrl;
    if (address instanceof URL) {
        parsedUrl = address;
    } else {
        try {
            parsedUrl = new URL(address);
        } catch (e) {
            throw new SyntaxError(`Invalid URL: ${address}`);
        }
    }
    if (parsedUrl.protocol === 'http:') {
        parsedUrl.protocol = 'ws:';
    } else if (parsedUrl.protocol === 'https:') {
        parsedUrl.protocol = 'wss:';
    }
    websocket._url = parsedUrl.href;
    const isSecure = parsedUrl.protocol === 'wss:';
    const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
    let invalidUrlMessage;
    if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
        invalidUrlMessage = 'The URL\'s protocol must be one of "ws:", "wss:", ' + '"http:", "https", or "ws+unix:"';
    } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
    } else if (parsedUrl.hash) {
        invalidUrlMessage = 'The URL contains a fragment identifier';
    }
    if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
            throw err;
        } else {
            emitErrorAndClose(websocket, err);
            return;
        }
    }
    const defaultPort = isSecure ? 443 : 80;
    const key = randomBytes(16).toString('base64');
    const request = isSecure ? https.request : http.request;
    const protocolSet = new Set();
    let perMessageDeflate;
    opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith('[') ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
    opts.headers = {
        ...opts.headers,
        'Sec-WebSocket-Version': opts.protocolVersion,
        'Sec-WebSocket-Key': key,
        Connection: 'Upgrade',
        Upgrade: 'websocket'
    };
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(opts.perMessageDeflate !== true ? opts.perMessageDeflate : {}, false, opts.maxPayload);
        opts.headers['Sec-WebSocket-Extensions'] = format({
            [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
    }
    if (protocols.length) {
        for (const protocol of protocols){
            if (typeof protocol !== 'string' || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
                throw new SyntaxError('An invalid or duplicated subprotocol was specified');
            }
            protocolSet.add(protocol);
        }
        opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
    }
    if (opts.origin) {
        if (opts.protocolVersion < 13) {
            opts.headers['Sec-WebSocket-Origin'] = opts.origin;
        } else {
            opts.headers.Origin = opts.origin;
        }
    }
    if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
    }
    if (isIpcUrl) {
        const parts = opts.path.split(':');
        opts.socketPath = parts[0];
        opts.path = parts[1];
    }
    let req;
    if (opts.followRedirects) {
        if (websocket._redirects === 0) {
            websocket._originalIpc = isIpcUrl;
            websocket._originalSecure = isSecure;
            websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
            const headers = options && options.headers;
            //
            // Shallow copy the user provided options so that headers can be changed
            // without mutating the original object.
            //
            options = {
                ...options,
                headers: {}
            };
            if (headers) {
                for (const [key, value] of Object.entries(headers)){
                    options.headers[key.toLowerCase()] = value;
                }
            }
        } else if (websocket.listenerCount('redirect') === 0) {
            const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
            if (!isSameHost || websocket._originalSecure && !isSecure) {
                //
                // Match curl 7.77.0 behavior and drop the following headers. These
                // headers are also dropped when following a redirect to a subdomain.
                //
                delete opts.headers.authorization;
                delete opts.headers.cookie;
                if (!isSameHost) delete opts.headers.host;
                opts.auth = undefined;
            }
        }
        //
        // Match curl 7.77.0 behavior and make the first `Authorization` header win.
        // If the `Authorization` header is set, then there is nothing to do as it
        // will take precedence.
        //
        if (opts.auth && !options.headers.authorization) {
            options.headers.authorization = 'Basic ' + Buffer.from(opts.auth).toString('base64');
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
            //
            // Unlike what is done for the `'upgrade'` event, no early exit is
            // triggered here if the user calls `websocket.close()` or
            // `websocket.terminate()` from a listener of the `'redirect'` event. This
            // is because the user can also call `request.destroy()` with an error
            // before calling `websocket.close()` or `websocket.terminate()` and this
            // would result in an error being emitted on the `request` object with no
            // `'error'` event listeners attached.
            //
            websocket.emit('redirect', websocket.url, req);
        }
    } else {
        req = websocket._req = request(opts);
    }
    if (opts.timeout) {
        req.on('timeout', ()=>{
            abortHandshake(websocket, req, 'Opening handshake has timed out');
        });
    }
    req.on('error', (err)=>{
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
    });
    req.on('response', (res)=>{
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
            if (++websocket._redirects > opts.maxRedirects) {
                abortHandshake(websocket, req, 'Maximum redirects exceeded');
                return;
            }
            req.abort();
            let addr;
            try {
                addr = new URL(location, address);
            } catch (e) {
                const err = new SyntaxError(`Invalid URL: ${location}`);
                emitErrorAndClose(websocket, err);
                return;
            }
            initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit('unexpected-response', req, res)) {
            abortHandshake(websocket, req, `Unexpected server response: ${res.statusCode}`);
        }
    });
    req.on('upgrade', (res, socket, head)=>{
        websocket.emit('upgrade', res);
        //
        // The user may have closed the connection from a listener of the
        // `'upgrade'` event.
        //
        if (websocket.readyState !== WebSocket.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
            abortHandshake(websocket, socket, 'Invalid Upgrade header');
            return;
        }
        const digest = createHash('sha1').update(key + GUID).digest('base64');
        if (res.headers['sec-websocket-accept'] !== digest) {
            abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
            return;
        }
        const serverProt = res.headers['sec-websocket-protocol'];
        let protError;
        if (serverProt !== undefined) {
            if (!protocolSet.size) {
                protError = 'Server sent a subprotocol but none was requested';
            } else if (!protocolSet.has(serverProt)) {
                protError = 'Server sent an invalid subprotocol';
            }
        } else if (protocolSet.size) {
            protError = 'Server sent no subprotocol';
        }
        if (protError) {
            abortHandshake(websocket, socket, protError);
            return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers['sec-websocket-extensions'];
        if (secWebSocketExtensions !== undefined) {
            if (!perMessageDeflate) {
                const message = 'Server sent a Sec-WebSocket-Extensions header but no extension ' + 'was requested';
                abortHandshake(websocket, socket, message);
                return;
            }
            let extensions;
            try {
                extensions = parse(secWebSocketExtensions);
            } catch (err) {
                const message = 'Invalid Sec-WebSocket-Extensions header';
                abortHandshake(websocket, socket, message);
                return;
            }
            const extensionNames = Object.keys(extensions);
            if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
                const message = 'Server indicated an extension that was not requested';
                abortHandshake(websocket, socket, message);
                return;
            }
            try {
                perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
            } catch (err) {
                const message = 'Invalid Sec-WebSocket-Extensions header';
                abortHandshake(websocket, socket, message);
                return;
            }
            websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
            allowSynchronousEvents: opts.allowSynchronousEvents,
            generateMask: opts.generateMask,
            maxPayload: opts.maxPayload,
            skipUTF8Validation: opts.skipUTF8Validation
        });
    });
    if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
    } else {
        req.end();
    }
}
/**
 * Emit the `'error'` and `'close'` events.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {Error} The error to emit
 * @private
 */ function emitErrorAndClose(websocket, err) {
    websocket._readyState = WebSocket.CLOSING;
    websocket.emit('error', err);
    websocket.emitClose();
}
/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */ function netConnect(options) {
    options.path = options.socketPath;
    return net.connect(options);
}
/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */ function tlsConnect(options) {
    options.path = undefined;
    if (!options.servername && options.servername !== '') {
        options.servername = net.isIP(options.host) ? '' : options.host;
    }
    return tls.connect(options);
}
/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */ function abortHandshake(websocket, stream, message) {
    websocket._readyState = WebSocket.CLOSING;
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
            //
            // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
            // called after the request completed. See
            // https://github.com/websockets/ws/issues/1869.
            //
            stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
    } else {
        stream.destroy(err);
        stream.once('error', websocket.emit.bind(websocket, 'error'));
        stream.once('close', websocket.emitClose.bind(websocket));
    }
}
/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */ function sendAfterClose(websocket, data, cb) {
    if (data) {
        const length = toBuffer(data).length;
        //
        // The `_bufferedAmount` property is used only when the peer is a client and
        // the opening handshake fails. Under these circumstances, in fact, the
        // `setSocket()` method is not called, so the `_socket` and `_sender`
        // properties are set to `null`.
        //
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
    }
    if (cb) {
        const err = new Error(`WebSocket is not open: readyState ${websocket.readyState} ` + `(${readyStates[websocket.readyState]})`);
        process.nextTick(cb, err);
    }
}
/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {Buffer} reason The reason for closing
 * @private
 */ function receiverOnConclude(code, reason) {
    const websocket = this[kWebSocket];
    websocket._closeFrameReceived = true;
    websocket._closeMessage = reason;
    websocket._closeCode = code;
    if (websocket._socket[kWebSocket] === undefined) return;
    websocket._socket.removeListener('data', socketOnData);
    process.nextTick(resume, websocket._socket);
    if (code === 1005) websocket.close();
    else websocket.close(code, reason);
}
/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */ function receiverOnDrain() {
    const websocket = this[kWebSocket];
    if (!websocket.isPaused) websocket._socket.resume();
}
/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */ function receiverOnError(err) {
    const websocket = this[kWebSocket];
    if (websocket._socket[kWebSocket] !== undefined) {
        websocket._socket.removeListener('data', socketOnData);
        //
        // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
        // https://github.com/websockets/ws/issues/1940.
        //
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
    }
    websocket.emit('error', err);
}
/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */ function receiverOnFinish() {
    this[kWebSocket].emitClose();
}
/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
 * @param {Boolean} isBinary Specifies whether the message is binary or not
 * @private
 */ function receiverOnMessage(data, isBinary) {
    this[kWebSocket].emit('message', data, isBinary);
}
/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */ function receiverOnPing(data) {
    const websocket = this[kWebSocket];
    if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
    websocket.emit('ping', data);
}
/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */ function receiverOnPong(data) {
    this[kWebSocket].emit('pong', data);
}
/**
 * Resume a readable stream
 *
 * @param {Readable} stream The readable stream
 * @private
 */ function resume(stream) {
    stream.resume();
}
/**
 * The listener of the socket `'close'` event.
 *
 * @private
 */ function socketOnClose() {
    const websocket = this[kWebSocket];
    this.removeListener('close', socketOnClose);
    this.removeListener('data', socketOnData);
    this.removeListener('end', socketOnEnd);
    websocket._readyState = WebSocket.CLOSING;
    let chunk;
    //
    // The close frame might not have been received or the `'end'` event emitted,
    // for example, if the socket was destroyed due to an error. Ensure that the
    // `receiver` stream is closed after writing any remaining buffered data to
    // it. If the readable side of the socket is in flowing mode then there is no
    // buffered data as everything has been already written and `readable.read()`
    // will return `null`. If instead, the socket is paused, any possible buffered
    // data will be read as a single chunk.
    //
    if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
        websocket._receiver.write(chunk);
    }
    websocket._receiver.end();
    this[kWebSocket] = undefined;
    clearTimeout(websocket._closeTimer);
    if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
    } else {
        websocket._receiver.on('error', receiverOnFinish);
        websocket._receiver.on('finish', receiverOnFinish);
    }
}
/**
 * The listener of the socket `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
    }
}
/**
 * The listener of the socket `'end'` event.
 *
 * @private
 */ function socketOnEnd() {
    const websocket = this[kWebSocket];
    websocket._readyState = WebSocket.CLOSING;
    websocket._receiver.end();
    this.end();
}
/**
 * The listener of the socket `'error'` event.
 *
 * @private
 */ function socketOnError() {
    const websocket = this[kWebSocket];
    this.removeListener('error', socketOnError);
    this.on('error', NOOP);
    if (websocket) {
        websocket._readyState = WebSocket.CLOSING;
        this.destroy();
    }
}
}),
"[project]/frontend/node_modules/ws/lib/websocket.js [app-ssr] (ecmascript) <export default as WebSocket>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSocket",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ws$2f$lib$2f$websocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ws$2f$lib$2f$websocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ws/lib/websocket.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/utf-8-validate/fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */ function isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while(i < len){
        if ((buf[i] & 0x80) === 0x00) {
            i++;
        } else if ((buf[i] & 0xe0) === 0xc0) {
            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // overlong
            ) {
                return false;
            }
            i += 2;
        } else if ((buf[i] & 0xf0) === 0xe0) {
            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || // overlong
            buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // surrogate (U+D800 - U+DFFF)
            ) {
                return false;
            }
            i += 3;
        } else if ((buf[i] & 0xf8) === 0xf0) {
            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || // overlong
            buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF
            ) {
                return false;
            }
            i += 4;
        } else {
            return false;
        }
    }
    return true;
}
module.exports = isValidUTF8;
}),
"[project]/frontend/node_modules/utf-8-validate/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

try {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)")(("TURBOPACK compile-time value", "/ROOT/frontend/node_modules/utf-8-validate"));
} catch (e) {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/utf-8-validate/fallback.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/aes-js/lib.esm/aes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! MIT License. Copyright 2015-2022 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */ __turbopack_context__.s([
    "AES",
    ()=>AES
]);
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _AES_key, _AES_Kd, _AES_Ke;
// Number of rounds by keysize
const numberOfRounds = {
    16: 10,
    24: 12,
    32: 14
};
// Round constant words
const rcon = [
    0x01,
    0x02,
    0x04,
    0x08,
    0x10,
    0x20,
    0x40,
    0x80,
    0x1b,
    0x36,
    0x6c,
    0xd8,
    0xab,
    0x4d,
    0x9a,
    0x2f,
    0x5e,
    0xbc,
    0x63,
    0xc6,
    0x97,
    0x35,
    0x6a,
    0xd4,
    0xb3,
    0x7d,
    0xfa,
    0xef,
    0xc5,
    0x91
];
// S-box and Inverse S-box (S is for Substitution)
const S = [
    0x63,
    0x7c,
    0x77,
    0x7b,
    0xf2,
    0x6b,
    0x6f,
    0xc5,
    0x30,
    0x01,
    0x67,
    0x2b,
    0xfe,
    0xd7,
    0xab,
    0x76,
    0xca,
    0x82,
    0xc9,
    0x7d,
    0xfa,
    0x59,
    0x47,
    0xf0,
    0xad,
    0xd4,
    0xa2,
    0xaf,
    0x9c,
    0xa4,
    0x72,
    0xc0,
    0xb7,
    0xfd,
    0x93,
    0x26,
    0x36,
    0x3f,
    0xf7,
    0xcc,
    0x34,
    0xa5,
    0xe5,
    0xf1,
    0x71,
    0xd8,
    0x31,
    0x15,
    0x04,
    0xc7,
    0x23,
    0xc3,
    0x18,
    0x96,
    0x05,
    0x9a,
    0x07,
    0x12,
    0x80,
    0xe2,
    0xeb,
    0x27,
    0xb2,
    0x75,
    0x09,
    0x83,
    0x2c,
    0x1a,
    0x1b,
    0x6e,
    0x5a,
    0xa0,
    0x52,
    0x3b,
    0xd6,
    0xb3,
    0x29,
    0xe3,
    0x2f,
    0x84,
    0x53,
    0xd1,
    0x00,
    0xed,
    0x20,
    0xfc,
    0xb1,
    0x5b,
    0x6a,
    0xcb,
    0xbe,
    0x39,
    0x4a,
    0x4c,
    0x58,
    0xcf,
    0xd0,
    0xef,
    0xaa,
    0xfb,
    0x43,
    0x4d,
    0x33,
    0x85,
    0x45,
    0xf9,
    0x02,
    0x7f,
    0x50,
    0x3c,
    0x9f,
    0xa8,
    0x51,
    0xa3,
    0x40,
    0x8f,
    0x92,
    0x9d,
    0x38,
    0xf5,
    0xbc,
    0xb6,
    0xda,
    0x21,
    0x10,
    0xff,
    0xf3,
    0xd2,
    0xcd,
    0x0c,
    0x13,
    0xec,
    0x5f,
    0x97,
    0x44,
    0x17,
    0xc4,
    0xa7,
    0x7e,
    0x3d,
    0x64,
    0x5d,
    0x19,
    0x73,
    0x60,
    0x81,
    0x4f,
    0xdc,
    0x22,
    0x2a,
    0x90,
    0x88,
    0x46,
    0xee,
    0xb8,
    0x14,
    0xde,
    0x5e,
    0x0b,
    0xdb,
    0xe0,
    0x32,
    0x3a,
    0x0a,
    0x49,
    0x06,
    0x24,
    0x5c,
    0xc2,
    0xd3,
    0xac,
    0x62,
    0x91,
    0x95,
    0xe4,
    0x79,
    0xe7,
    0xc8,
    0x37,
    0x6d,
    0x8d,
    0xd5,
    0x4e,
    0xa9,
    0x6c,
    0x56,
    0xf4,
    0xea,
    0x65,
    0x7a,
    0xae,
    0x08,
    0xba,
    0x78,
    0x25,
    0x2e,
    0x1c,
    0xa6,
    0xb4,
    0xc6,
    0xe8,
    0xdd,
    0x74,
    0x1f,
    0x4b,
    0xbd,
    0x8b,
    0x8a,
    0x70,
    0x3e,
    0xb5,
    0x66,
    0x48,
    0x03,
    0xf6,
    0x0e,
    0x61,
    0x35,
    0x57,
    0xb9,
    0x86,
    0xc1,
    0x1d,
    0x9e,
    0xe1,
    0xf8,
    0x98,
    0x11,
    0x69,
    0xd9,
    0x8e,
    0x94,
    0x9b,
    0x1e,
    0x87,
    0xe9,
    0xce,
    0x55,
    0x28,
    0xdf,
    0x8c,
    0xa1,
    0x89,
    0x0d,
    0xbf,
    0xe6,
    0x42,
    0x68,
    0x41,
    0x99,
    0x2d,
    0x0f,
    0xb0,
    0x54,
    0xbb,
    0x16
];
const Si = [
    0x52,
    0x09,
    0x6a,
    0xd5,
    0x30,
    0x36,
    0xa5,
    0x38,
    0xbf,
    0x40,
    0xa3,
    0x9e,
    0x81,
    0xf3,
    0xd7,
    0xfb,
    0x7c,
    0xe3,
    0x39,
    0x82,
    0x9b,
    0x2f,
    0xff,
    0x87,
    0x34,
    0x8e,
    0x43,
    0x44,
    0xc4,
    0xde,
    0xe9,
    0xcb,
    0x54,
    0x7b,
    0x94,
    0x32,
    0xa6,
    0xc2,
    0x23,
    0x3d,
    0xee,
    0x4c,
    0x95,
    0x0b,
    0x42,
    0xfa,
    0xc3,
    0x4e,
    0x08,
    0x2e,
    0xa1,
    0x66,
    0x28,
    0xd9,
    0x24,
    0xb2,
    0x76,
    0x5b,
    0xa2,
    0x49,
    0x6d,
    0x8b,
    0xd1,
    0x25,
    0x72,
    0xf8,
    0xf6,
    0x64,
    0x86,
    0x68,
    0x98,
    0x16,
    0xd4,
    0xa4,
    0x5c,
    0xcc,
    0x5d,
    0x65,
    0xb6,
    0x92,
    0x6c,
    0x70,
    0x48,
    0x50,
    0xfd,
    0xed,
    0xb9,
    0xda,
    0x5e,
    0x15,
    0x46,
    0x57,
    0xa7,
    0x8d,
    0x9d,
    0x84,
    0x90,
    0xd8,
    0xab,
    0x00,
    0x8c,
    0xbc,
    0xd3,
    0x0a,
    0xf7,
    0xe4,
    0x58,
    0x05,
    0xb8,
    0xb3,
    0x45,
    0x06,
    0xd0,
    0x2c,
    0x1e,
    0x8f,
    0xca,
    0x3f,
    0x0f,
    0x02,
    0xc1,
    0xaf,
    0xbd,
    0x03,
    0x01,
    0x13,
    0x8a,
    0x6b,
    0x3a,
    0x91,
    0x11,
    0x41,
    0x4f,
    0x67,
    0xdc,
    0xea,
    0x97,
    0xf2,
    0xcf,
    0xce,
    0xf0,
    0xb4,
    0xe6,
    0x73,
    0x96,
    0xac,
    0x74,
    0x22,
    0xe7,
    0xad,
    0x35,
    0x85,
    0xe2,
    0xf9,
    0x37,
    0xe8,
    0x1c,
    0x75,
    0xdf,
    0x6e,
    0x47,
    0xf1,
    0x1a,
    0x71,
    0x1d,
    0x29,
    0xc5,
    0x89,
    0x6f,
    0xb7,
    0x62,
    0x0e,
    0xaa,
    0x18,
    0xbe,
    0x1b,
    0xfc,
    0x56,
    0x3e,
    0x4b,
    0xc6,
    0xd2,
    0x79,
    0x20,
    0x9a,
    0xdb,
    0xc0,
    0xfe,
    0x78,
    0xcd,
    0x5a,
    0xf4,
    0x1f,
    0xdd,
    0xa8,
    0x33,
    0x88,
    0x07,
    0xc7,
    0x31,
    0xb1,
    0x12,
    0x10,
    0x59,
    0x27,
    0x80,
    0xec,
    0x5f,
    0x60,
    0x51,
    0x7f,
    0xa9,
    0x19,
    0xb5,
    0x4a,
    0x0d,
    0x2d,
    0xe5,
    0x7a,
    0x9f,
    0x93,
    0xc9,
    0x9c,
    0xef,
    0xa0,
    0xe0,
    0x3b,
    0x4d,
    0xae,
    0x2a,
    0xf5,
    0xb0,
    0xc8,
    0xeb,
    0xbb,
    0x3c,
    0x83,
    0x53,
    0x99,
    0x61,
    0x17,
    0x2b,
    0x04,
    0x7e,
    0xba,
    0x77,
    0xd6,
    0x26,
    0xe1,
    0x69,
    0x14,
    0x63,
    0x55,
    0x21,
    0x0c,
    0x7d
];
// Transformations for encryption
const T1 = [
    0xc66363a5,
    0xf87c7c84,
    0xee777799,
    0xf67b7b8d,
    0xfff2f20d,
    0xd66b6bbd,
    0xde6f6fb1,
    0x91c5c554,
    0x60303050,
    0x02010103,
    0xce6767a9,
    0x562b2b7d,
    0xe7fefe19,
    0xb5d7d762,
    0x4dababe6,
    0xec76769a,
    0x8fcaca45,
    0x1f82829d,
    0x89c9c940,
    0xfa7d7d87,
    0xeffafa15,
    0xb25959eb,
    0x8e4747c9,
    0xfbf0f00b,
    0x41adadec,
    0xb3d4d467,
    0x5fa2a2fd,
    0x45afafea,
    0x239c9cbf,
    0x53a4a4f7,
    0xe4727296,
    0x9bc0c05b,
    0x75b7b7c2,
    0xe1fdfd1c,
    0x3d9393ae,
    0x4c26266a,
    0x6c36365a,
    0x7e3f3f41,
    0xf5f7f702,
    0x83cccc4f,
    0x6834345c,
    0x51a5a5f4,
    0xd1e5e534,
    0xf9f1f108,
    0xe2717193,
    0xabd8d873,
    0x62313153,
    0x2a15153f,
    0x0804040c,
    0x95c7c752,
    0x46232365,
    0x9dc3c35e,
    0x30181828,
    0x379696a1,
    0x0a05050f,
    0x2f9a9ab5,
    0x0e070709,
    0x24121236,
    0x1b80809b,
    0xdfe2e23d,
    0xcdebeb26,
    0x4e272769,
    0x7fb2b2cd,
    0xea75759f,
    0x1209091b,
    0x1d83839e,
    0x582c2c74,
    0x341a1a2e,
    0x361b1b2d,
    0xdc6e6eb2,
    0xb45a5aee,
    0x5ba0a0fb,
    0xa45252f6,
    0x763b3b4d,
    0xb7d6d661,
    0x7db3b3ce,
    0x5229297b,
    0xdde3e33e,
    0x5e2f2f71,
    0x13848497,
    0xa65353f5,
    0xb9d1d168,
    0x00000000,
    0xc1eded2c,
    0x40202060,
    0xe3fcfc1f,
    0x79b1b1c8,
    0xb65b5bed,
    0xd46a6abe,
    0x8dcbcb46,
    0x67bebed9,
    0x7239394b,
    0x944a4ade,
    0x984c4cd4,
    0xb05858e8,
    0x85cfcf4a,
    0xbbd0d06b,
    0xc5efef2a,
    0x4faaaae5,
    0xedfbfb16,
    0x864343c5,
    0x9a4d4dd7,
    0x66333355,
    0x11858594,
    0x8a4545cf,
    0xe9f9f910,
    0x04020206,
    0xfe7f7f81,
    0xa05050f0,
    0x783c3c44,
    0x259f9fba,
    0x4ba8a8e3,
    0xa25151f3,
    0x5da3a3fe,
    0x804040c0,
    0x058f8f8a,
    0x3f9292ad,
    0x219d9dbc,
    0x70383848,
    0xf1f5f504,
    0x63bcbcdf,
    0x77b6b6c1,
    0xafdada75,
    0x42212163,
    0x20101030,
    0xe5ffff1a,
    0xfdf3f30e,
    0xbfd2d26d,
    0x81cdcd4c,
    0x180c0c14,
    0x26131335,
    0xc3ecec2f,
    0xbe5f5fe1,
    0x359797a2,
    0x884444cc,
    0x2e171739,
    0x93c4c457,
    0x55a7a7f2,
    0xfc7e7e82,
    0x7a3d3d47,
    0xc86464ac,
    0xba5d5de7,
    0x3219192b,
    0xe6737395,
    0xc06060a0,
    0x19818198,
    0x9e4f4fd1,
    0xa3dcdc7f,
    0x44222266,
    0x542a2a7e,
    0x3b9090ab,
    0x0b888883,
    0x8c4646ca,
    0xc7eeee29,
    0x6bb8b8d3,
    0x2814143c,
    0xa7dede79,
    0xbc5e5ee2,
    0x160b0b1d,
    0xaddbdb76,
    0xdbe0e03b,
    0x64323256,
    0x743a3a4e,
    0x140a0a1e,
    0x924949db,
    0x0c06060a,
    0x4824246c,
    0xb85c5ce4,
    0x9fc2c25d,
    0xbdd3d36e,
    0x43acacef,
    0xc46262a6,
    0x399191a8,
    0x319595a4,
    0xd3e4e437,
    0xf279798b,
    0xd5e7e732,
    0x8bc8c843,
    0x6e373759,
    0xda6d6db7,
    0x018d8d8c,
    0xb1d5d564,
    0x9c4e4ed2,
    0x49a9a9e0,
    0xd86c6cb4,
    0xac5656fa,
    0xf3f4f407,
    0xcfeaea25,
    0xca6565af,
    0xf47a7a8e,
    0x47aeaee9,
    0x10080818,
    0x6fbabad5,
    0xf0787888,
    0x4a25256f,
    0x5c2e2e72,
    0x381c1c24,
    0x57a6a6f1,
    0x73b4b4c7,
    0x97c6c651,
    0xcbe8e823,
    0xa1dddd7c,
    0xe874749c,
    0x3e1f1f21,
    0x964b4bdd,
    0x61bdbddc,
    0x0d8b8b86,
    0x0f8a8a85,
    0xe0707090,
    0x7c3e3e42,
    0x71b5b5c4,
    0xcc6666aa,
    0x904848d8,
    0x06030305,
    0xf7f6f601,
    0x1c0e0e12,
    0xc26161a3,
    0x6a35355f,
    0xae5757f9,
    0x69b9b9d0,
    0x17868691,
    0x99c1c158,
    0x3a1d1d27,
    0x279e9eb9,
    0xd9e1e138,
    0xebf8f813,
    0x2b9898b3,
    0x22111133,
    0xd26969bb,
    0xa9d9d970,
    0x078e8e89,
    0x339494a7,
    0x2d9b9bb6,
    0x3c1e1e22,
    0x15878792,
    0xc9e9e920,
    0x87cece49,
    0xaa5555ff,
    0x50282878,
    0xa5dfdf7a,
    0x038c8c8f,
    0x59a1a1f8,
    0x09898980,
    0x1a0d0d17,
    0x65bfbfda,
    0xd7e6e631,
    0x844242c6,
    0xd06868b8,
    0x824141c3,
    0x299999b0,
    0x5a2d2d77,
    0x1e0f0f11,
    0x7bb0b0cb,
    0xa85454fc,
    0x6dbbbbd6,
    0x2c16163a
];
const T2 = [
    0xa5c66363,
    0x84f87c7c,
    0x99ee7777,
    0x8df67b7b,
    0x0dfff2f2,
    0xbdd66b6b,
    0xb1de6f6f,
    0x5491c5c5,
    0x50603030,
    0x03020101,
    0xa9ce6767,
    0x7d562b2b,
    0x19e7fefe,
    0x62b5d7d7,
    0xe64dabab,
    0x9aec7676,
    0x458fcaca,
    0x9d1f8282,
    0x4089c9c9,
    0x87fa7d7d,
    0x15effafa,
    0xebb25959,
    0xc98e4747,
    0x0bfbf0f0,
    0xec41adad,
    0x67b3d4d4,
    0xfd5fa2a2,
    0xea45afaf,
    0xbf239c9c,
    0xf753a4a4,
    0x96e47272,
    0x5b9bc0c0,
    0xc275b7b7,
    0x1ce1fdfd,
    0xae3d9393,
    0x6a4c2626,
    0x5a6c3636,
    0x417e3f3f,
    0x02f5f7f7,
    0x4f83cccc,
    0x5c683434,
    0xf451a5a5,
    0x34d1e5e5,
    0x08f9f1f1,
    0x93e27171,
    0x73abd8d8,
    0x53623131,
    0x3f2a1515,
    0x0c080404,
    0x5295c7c7,
    0x65462323,
    0x5e9dc3c3,
    0x28301818,
    0xa1379696,
    0x0f0a0505,
    0xb52f9a9a,
    0x090e0707,
    0x36241212,
    0x9b1b8080,
    0x3ddfe2e2,
    0x26cdebeb,
    0x694e2727,
    0xcd7fb2b2,
    0x9fea7575,
    0x1b120909,
    0x9e1d8383,
    0x74582c2c,
    0x2e341a1a,
    0x2d361b1b,
    0xb2dc6e6e,
    0xeeb45a5a,
    0xfb5ba0a0,
    0xf6a45252,
    0x4d763b3b,
    0x61b7d6d6,
    0xce7db3b3,
    0x7b522929,
    0x3edde3e3,
    0x715e2f2f,
    0x97138484,
    0xf5a65353,
    0x68b9d1d1,
    0x00000000,
    0x2cc1eded,
    0x60402020,
    0x1fe3fcfc,
    0xc879b1b1,
    0xedb65b5b,
    0xbed46a6a,
    0x468dcbcb,
    0xd967bebe,
    0x4b723939,
    0xde944a4a,
    0xd4984c4c,
    0xe8b05858,
    0x4a85cfcf,
    0x6bbbd0d0,
    0x2ac5efef,
    0xe54faaaa,
    0x16edfbfb,
    0xc5864343,
    0xd79a4d4d,
    0x55663333,
    0x94118585,
    0xcf8a4545,
    0x10e9f9f9,
    0x06040202,
    0x81fe7f7f,
    0xf0a05050,
    0x44783c3c,
    0xba259f9f,
    0xe34ba8a8,
    0xf3a25151,
    0xfe5da3a3,
    0xc0804040,
    0x8a058f8f,
    0xad3f9292,
    0xbc219d9d,
    0x48703838,
    0x04f1f5f5,
    0xdf63bcbc,
    0xc177b6b6,
    0x75afdada,
    0x63422121,
    0x30201010,
    0x1ae5ffff,
    0x0efdf3f3,
    0x6dbfd2d2,
    0x4c81cdcd,
    0x14180c0c,
    0x35261313,
    0x2fc3ecec,
    0xe1be5f5f,
    0xa2359797,
    0xcc884444,
    0x392e1717,
    0x5793c4c4,
    0xf255a7a7,
    0x82fc7e7e,
    0x477a3d3d,
    0xacc86464,
    0xe7ba5d5d,
    0x2b321919,
    0x95e67373,
    0xa0c06060,
    0x98198181,
    0xd19e4f4f,
    0x7fa3dcdc,
    0x66442222,
    0x7e542a2a,
    0xab3b9090,
    0x830b8888,
    0xca8c4646,
    0x29c7eeee,
    0xd36bb8b8,
    0x3c281414,
    0x79a7dede,
    0xe2bc5e5e,
    0x1d160b0b,
    0x76addbdb,
    0x3bdbe0e0,
    0x56643232,
    0x4e743a3a,
    0x1e140a0a,
    0xdb924949,
    0x0a0c0606,
    0x6c482424,
    0xe4b85c5c,
    0x5d9fc2c2,
    0x6ebdd3d3,
    0xef43acac,
    0xa6c46262,
    0xa8399191,
    0xa4319595,
    0x37d3e4e4,
    0x8bf27979,
    0x32d5e7e7,
    0x438bc8c8,
    0x596e3737,
    0xb7da6d6d,
    0x8c018d8d,
    0x64b1d5d5,
    0xd29c4e4e,
    0xe049a9a9,
    0xb4d86c6c,
    0xfaac5656,
    0x07f3f4f4,
    0x25cfeaea,
    0xafca6565,
    0x8ef47a7a,
    0xe947aeae,
    0x18100808,
    0xd56fbaba,
    0x88f07878,
    0x6f4a2525,
    0x725c2e2e,
    0x24381c1c,
    0xf157a6a6,
    0xc773b4b4,
    0x5197c6c6,
    0x23cbe8e8,
    0x7ca1dddd,
    0x9ce87474,
    0x213e1f1f,
    0xdd964b4b,
    0xdc61bdbd,
    0x860d8b8b,
    0x850f8a8a,
    0x90e07070,
    0x427c3e3e,
    0xc471b5b5,
    0xaacc6666,
    0xd8904848,
    0x05060303,
    0x01f7f6f6,
    0x121c0e0e,
    0xa3c26161,
    0x5f6a3535,
    0xf9ae5757,
    0xd069b9b9,
    0x91178686,
    0x5899c1c1,
    0x273a1d1d,
    0xb9279e9e,
    0x38d9e1e1,
    0x13ebf8f8,
    0xb32b9898,
    0x33221111,
    0xbbd26969,
    0x70a9d9d9,
    0x89078e8e,
    0xa7339494,
    0xb62d9b9b,
    0x223c1e1e,
    0x92158787,
    0x20c9e9e9,
    0x4987cece,
    0xffaa5555,
    0x78502828,
    0x7aa5dfdf,
    0x8f038c8c,
    0xf859a1a1,
    0x80098989,
    0x171a0d0d,
    0xda65bfbf,
    0x31d7e6e6,
    0xc6844242,
    0xb8d06868,
    0xc3824141,
    0xb0299999,
    0x775a2d2d,
    0x111e0f0f,
    0xcb7bb0b0,
    0xfca85454,
    0xd66dbbbb,
    0x3a2c1616
];
const T3 = [
    0x63a5c663,
    0x7c84f87c,
    0x7799ee77,
    0x7b8df67b,
    0xf20dfff2,
    0x6bbdd66b,
    0x6fb1de6f,
    0xc55491c5,
    0x30506030,
    0x01030201,
    0x67a9ce67,
    0x2b7d562b,
    0xfe19e7fe,
    0xd762b5d7,
    0xabe64dab,
    0x769aec76,
    0xca458fca,
    0x829d1f82,
    0xc94089c9,
    0x7d87fa7d,
    0xfa15effa,
    0x59ebb259,
    0x47c98e47,
    0xf00bfbf0,
    0xadec41ad,
    0xd467b3d4,
    0xa2fd5fa2,
    0xafea45af,
    0x9cbf239c,
    0xa4f753a4,
    0x7296e472,
    0xc05b9bc0,
    0xb7c275b7,
    0xfd1ce1fd,
    0x93ae3d93,
    0x266a4c26,
    0x365a6c36,
    0x3f417e3f,
    0xf702f5f7,
    0xcc4f83cc,
    0x345c6834,
    0xa5f451a5,
    0xe534d1e5,
    0xf108f9f1,
    0x7193e271,
    0xd873abd8,
    0x31536231,
    0x153f2a15,
    0x040c0804,
    0xc75295c7,
    0x23654623,
    0xc35e9dc3,
    0x18283018,
    0x96a13796,
    0x050f0a05,
    0x9ab52f9a,
    0x07090e07,
    0x12362412,
    0x809b1b80,
    0xe23ddfe2,
    0xeb26cdeb,
    0x27694e27,
    0xb2cd7fb2,
    0x759fea75,
    0x091b1209,
    0x839e1d83,
    0x2c74582c,
    0x1a2e341a,
    0x1b2d361b,
    0x6eb2dc6e,
    0x5aeeb45a,
    0xa0fb5ba0,
    0x52f6a452,
    0x3b4d763b,
    0xd661b7d6,
    0xb3ce7db3,
    0x297b5229,
    0xe33edde3,
    0x2f715e2f,
    0x84971384,
    0x53f5a653,
    0xd168b9d1,
    0x00000000,
    0xed2cc1ed,
    0x20604020,
    0xfc1fe3fc,
    0xb1c879b1,
    0x5bedb65b,
    0x6abed46a,
    0xcb468dcb,
    0xbed967be,
    0x394b7239,
    0x4ade944a,
    0x4cd4984c,
    0x58e8b058,
    0xcf4a85cf,
    0xd06bbbd0,
    0xef2ac5ef,
    0xaae54faa,
    0xfb16edfb,
    0x43c58643,
    0x4dd79a4d,
    0x33556633,
    0x85941185,
    0x45cf8a45,
    0xf910e9f9,
    0x02060402,
    0x7f81fe7f,
    0x50f0a050,
    0x3c44783c,
    0x9fba259f,
    0xa8e34ba8,
    0x51f3a251,
    0xa3fe5da3,
    0x40c08040,
    0x8f8a058f,
    0x92ad3f92,
    0x9dbc219d,
    0x38487038,
    0xf504f1f5,
    0xbcdf63bc,
    0xb6c177b6,
    0xda75afda,
    0x21634221,
    0x10302010,
    0xff1ae5ff,
    0xf30efdf3,
    0xd26dbfd2,
    0xcd4c81cd,
    0x0c14180c,
    0x13352613,
    0xec2fc3ec,
    0x5fe1be5f,
    0x97a23597,
    0x44cc8844,
    0x17392e17,
    0xc45793c4,
    0xa7f255a7,
    0x7e82fc7e,
    0x3d477a3d,
    0x64acc864,
    0x5de7ba5d,
    0x192b3219,
    0x7395e673,
    0x60a0c060,
    0x81981981,
    0x4fd19e4f,
    0xdc7fa3dc,
    0x22664422,
    0x2a7e542a,
    0x90ab3b90,
    0x88830b88,
    0x46ca8c46,
    0xee29c7ee,
    0xb8d36bb8,
    0x143c2814,
    0xde79a7de,
    0x5ee2bc5e,
    0x0b1d160b,
    0xdb76addb,
    0xe03bdbe0,
    0x32566432,
    0x3a4e743a,
    0x0a1e140a,
    0x49db9249,
    0x060a0c06,
    0x246c4824,
    0x5ce4b85c,
    0xc25d9fc2,
    0xd36ebdd3,
    0xacef43ac,
    0x62a6c462,
    0x91a83991,
    0x95a43195,
    0xe437d3e4,
    0x798bf279,
    0xe732d5e7,
    0xc8438bc8,
    0x37596e37,
    0x6db7da6d,
    0x8d8c018d,
    0xd564b1d5,
    0x4ed29c4e,
    0xa9e049a9,
    0x6cb4d86c,
    0x56faac56,
    0xf407f3f4,
    0xea25cfea,
    0x65afca65,
    0x7a8ef47a,
    0xaee947ae,
    0x08181008,
    0xbad56fba,
    0x7888f078,
    0x256f4a25,
    0x2e725c2e,
    0x1c24381c,
    0xa6f157a6,
    0xb4c773b4,
    0xc65197c6,
    0xe823cbe8,
    0xdd7ca1dd,
    0x749ce874,
    0x1f213e1f,
    0x4bdd964b,
    0xbddc61bd,
    0x8b860d8b,
    0x8a850f8a,
    0x7090e070,
    0x3e427c3e,
    0xb5c471b5,
    0x66aacc66,
    0x48d89048,
    0x03050603,
    0xf601f7f6,
    0x0e121c0e,
    0x61a3c261,
    0x355f6a35,
    0x57f9ae57,
    0xb9d069b9,
    0x86911786,
    0xc15899c1,
    0x1d273a1d,
    0x9eb9279e,
    0xe138d9e1,
    0xf813ebf8,
    0x98b32b98,
    0x11332211,
    0x69bbd269,
    0xd970a9d9,
    0x8e89078e,
    0x94a73394,
    0x9bb62d9b,
    0x1e223c1e,
    0x87921587,
    0xe920c9e9,
    0xce4987ce,
    0x55ffaa55,
    0x28785028,
    0xdf7aa5df,
    0x8c8f038c,
    0xa1f859a1,
    0x89800989,
    0x0d171a0d,
    0xbfda65bf,
    0xe631d7e6,
    0x42c68442,
    0x68b8d068,
    0x41c38241,
    0x99b02999,
    0x2d775a2d,
    0x0f111e0f,
    0xb0cb7bb0,
    0x54fca854,
    0xbbd66dbb,
    0x163a2c16
];
const T4 = [
    0x6363a5c6,
    0x7c7c84f8,
    0x777799ee,
    0x7b7b8df6,
    0xf2f20dff,
    0x6b6bbdd6,
    0x6f6fb1de,
    0xc5c55491,
    0x30305060,
    0x01010302,
    0x6767a9ce,
    0x2b2b7d56,
    0xfefe19e7,
    0xd7d762b5,
    0xababe64d,
    0x76769aec,
    0xcaca458f,
    0x82829d1f,
    0xc9c94089,
    0x7d7d87fa,
    0xfafa15ef,
    0x5959ebb2,
    0x4747c98e,
    0xf0f00bfb,
    0xadadec41,
    0xd4d467b3,
    0xa2a2fd5f,
    0xafafea45,
    0x9c9cbf23,
    0xa4a4f753,
    0x727296e4,
    0xc0c05b9b,
    0xb7b7c275,
    0xfdfd1ce1,
    0x9393ae3d,
    0x26266a4c,
    0x36365a6c,
    0x3f3f417e,
    0xf7f702f5,
    0xcccc4f83,
    0x34345c68,
    0xa5a5f451,
    0xe5e534d1,
    0xf1f108f9,
    0x717193e2,
    0xd8d873ab,
    0x31315362,
    0x15153f2a,
    0x04040c08,
    0xc7c75295,
    0x23236546,
    0xc3c35e9d,
    0x18182830,
    0x9696a137,
    0x05050f0a,
    0x9a9ab52f,
    0x0707090e,
    0x12123624,
    0x80809b1b,
    0xe2e23ddf,
    0xebeb26cd,
    0x2727694e,
    0xb2b2cd7f,
    0x75759fea,
    0x09091b12,
    0x83839e1d,
    0x2c2c7458,
    0x1a1a2e34,
    0x1b1b2d36,
    0x6e6eb2dc,
    0x5a5aeeb4,
    0xa0a0fb5b,
    0x5252f6a4,
    0x3b3b4d76,
    0xd6d661b7,
    0xb3b3ce7d,
    0x29297b52,
    0xe3e33edd,
    0x2f2f715e,
    0x84849713,
    0x5353f5a6,
    0xd1d168b9,
    0x00000000,
    0xeded2cc1,
    0x20206040,
    0xfcfc1fe3,
    0xb1b1c879,
    0x5b5bedb6,
    0x6a6abed4,
    0xcbcb468d,
    0xbebed967,
    0x39394b72,
    0x4a4ade94,
    0x4c4cd498,
    0x5858e8b0,
    0xcfcf4a85,
    0xd0d06bbb,
    0xefef2ac5,
    0xaaaae54f,
    0xfbfb16ed,
    0x4343c586,
    0x4d4dd79a,
    0x33335566,
    0x85859411,
    0x4545cf8a,
    0xf9f910e9,
    0x02020604,
    0x7f7f81fe,
    0x5050f0a0,
    0x3c3c4478,
    0x9f9fba25,
    0xa8a8e34b,
    0x5151f3a2,
    0xa3a3fe5d,
    0x4040c080,
    0x8f8f8a05,
    0x9292ad3f,
    0x9d9dbc21,
    0x38384870,
    0xf5f504f1,
    0xbcbcdf63,
    0xb6b6c177,
    0xdada75af,
    0x21216342,
    0x10103020,
    0xffff1ae5,
    0xf3f30efd,
    0xd2d26dbf,
    0xcdcd4c81,
    0x0c0c1418,
    0x13133526,
    0xecec2fc3,
    0x5f5fe1be,
    0x9797a235,
    0x4444cc88,
    0x1717392e,
    0xc4c45793,
    0xa7a7f255,
    0x7e7e82fc,
    0x3d3d477a,
    0x6464acc8,
    0x5d5de7ba,
    0x19192b32,
    0x737395e6,
    0x6060a0c0,
    0x81819819,
    0x4f4fd19e,
    0xdcdc7fa3,
    0x22226644,
    0x2a2a7e54,
    0x9090ab3b,
    0x8888830b,
    0x4646ca8c,
    0xeeee29c7,
    0xb8b8d36b,
    0x14143c28,
    0xdede79a7,
    0x5e5ee2bc,
    0x0b0b1d16,
    0xdbdb76ad,
    0xe0e03bdb,
    0x32325664,
    0x3a3a4e74,
    0x0a0a1e14,
    0x4949db92,
    0x06060a0c,
    0x24246c48,
    0x5c5ce4b8,
    0xc2c25d9f,
    0xd3d36ebd,
    0xacacef43,
    0x6262a6c4,
    0x9191a839,
    0x9595a431,
    0xe4e437d3,
    0x79798bf2,
    0xe7e732d5,
    0xc8c8438b,
    0x3737596e,
    0x6d6db7da,
    0x8d8d8c01,
    0xd5d564b1,
    0x4e4ed29c,
    0xa9a9e049,
    0x6c6cb4d8,
    0x5656faac,
    0xf4f407f3,
    0xeaea25cf,
    0x6565afca,
    0x7a7a8ef4,
    0xaeaee947,
    0x08081810,
    0xbabad56f,
    0x787888f0,
    0x25256f4a,
    0x2e2e725c,
    0x1c1c2438,
    0xa6a6f157,
    0xb4b4c773,
    0xc6c65197,
    0xe8e823cb,
    0xdddd7ca1,
    0x74749ce8,
    0x1f1f213e,
    0x4b4bdd96,
    0xbdbddc61,
    0x8b8b860d,
    0x8a8a850f,
    0x707090e0,
    0x3e3e427c,
    0xb5b5c471,
    0x6666aacc,
    0x4848d890,
    0x03030506,
    0xf6f601f7,
    0x0e0e121c,
    0x6161a3c2,
    0x35355f6a,
    0x5757f9ae,
    0xb9b9d069,
    0x86869117,
    0xc1c15899,
    0x1d1d273a,
    0x9e9eb927,
    0xe1e138d9,
    0xf8f813eb,
    0x9898b32b,
    0x11113322,
    0x6969bbd2,
    0xd9d970a9,
    0x8e8e8907,
    0x9494a733,
    0x9b9bb62d,
    0x1e1e223c,
    0x87879215,
    0xe9e920c9,
    0xcece4987,
    0x5555ffaa,
    0x28287850,
    0xdfdf7aa5,
    0x8c8c8f03,
    0xa1a1f859,
    0x89898009,
    0x0d0d171a,
    0xbfbfda65,
    0xe6e631d7,
    0x4242c684,
    0x6868b8d0,
    0x4141c382,
    0x9999b029,
    0x2d2d775a,
    0x0f0f111e,
    0xb0b0cb7b,
    0x5454fca8,
    0xbbbbd66d,
    0x16163a2c
];
// Transformations for decryption
const T5 = [
    0x51f4a750,
    0x7e416553,
    0x1a17a4c3,
    0x3a275e96,
    0x3bab6bcb,
    0x1f9d45f1,
    0xacfa58ab,
    0x4be30393,
    0x2030fa55,
    0xad766df6,
    0x88cc7691,
    0xf5024c25,
    0x4fe5d7fc,
    0xc52acbd7,
    0x26354480,
    0xb562a38f,
    0xdeb15a49,
    0x25ba1b67,
    0x45ea0e98,
    0x5dfec0e1,
    0xc32f7502,
    0x814cf012,
    0x8d4697a3,
    0x6bd3f9c6,
    0x038f5fe7,
    0x15929c95,
    0xbf6d7aeb,
    0x955259da,
    0xd4be832d,
    0x587421d3,
    0x49e06929,
    0x8ec9c844,
    0x75c2896a,
    0xf48e7978,
    0x99583e6b,
    0x27b971dd,
    0xbee14fb6,
    0xf088ad17,
    0xc920ac66,
    0x7dce3ab4,
    0x63df4a18,
    0xe51a3182,
    0x97513360,
    0x62537f45,
    0xb16477e0,
    0xbb6bae84,
    0xfe81a01c,
    0xf9082b94,
    0x70486858,
    0x8f45fd19,
    0x94de6c87,
    0x527bf8b7,
    0xab73d323,
    0x724b02e2,
    0xe31f8f57,
    0x6655ab2a,
    0xb2eb2807,
    0x2fb5c203,
    0x86c57b9a,
    0xd33708a5,
    0x302887f2,
    0x23bfa5b2,
    0x02036aba,
    0xed16825c,
    0x8acf1c2b,
    0xa779b492,
    0xf307f2f0,
    0x4e69e2a1,
    0x65daf4cd,
    0x0605bed5,
    0xd134621f,
    0xc4a6fe8a,
    0x342e539d,
    0xa2f355a0,
    0x058ae132,
    0xa4f6eb75,
    0x0b83ec39,
    0x4060efaa,
    0x5e719f06,
    0xbd6e1051,
    0x3e218af9,
    0x96dd063d,
    0xdd3e05ae,
    0x4de6bd46,
    0x91548db5,
    0x71c45d05,
    0x0406d46f,
    0x605015ff,
    0x1998fb24,
    0xd6bde997,
    0x894043cc,
    0x67d99e77,
    0xb0e842bd,
    0x07898b88,
    0xe7195b38,
    0x79c8eedb,
    0xa17c0a47,
    0x7c420fe9,
    0xf8841ec9,
    0x00000000,
    0x09808683,
    0x322bed48,
    0x1e1170ac,
    0x6c5a724e,
    0xfd0efffb,
    0x0f853856,
    0x3daed51e,
    0x362d3927,
    0x0a0fd964,
    0x685ca621,
    0x9b5b54d1,
    0x24362e3a,
    0x0c0a67b1,
    0x9357e70f,
    0xb4ee96d2,
    0x1b9b919e,
    0x80c0c54f,
    0x61dc20a2,
    0x5a774b69,
    0x1c121a16,
    0xe293ba0a,
    0xc0a02ae5,
    0x3c22e043,
    0x121b171d,
    0x0e090d0b,
    0xf28bc7ad,
    0x2db6a8b9,
    0x141ea9c8,
    0x57f11985,
    0xaf75074c,
    0xee99ddbb,
    0xa37f60fd,
    0xf701269f,
    0x5c72f5bc,
    0x44663bc5,
    0x5bfb7e34,
    0x8b432976,
    0xcb23c6dc,
    0xb6edfc68,
    0xb8e4f163,
    0xd731dcca,
    0x42638510,
    0x13972240,
    0x84c61120,
    0x854a247d,
    0xd2bb3df8,
    0xaef93211,
    0xc729a16d,
    0x1d9e2f4b,
    0xdcb230f3,
    0x0d8652ec,
    0x77c1e3d0,
    0x2bb3166c,
    0xa970b999,
    0x119448fa,
    0x47e96422,
    0xa8fc8cc4,
    0xa0f03f1a,
    0x567d2cd8,
    0x223390ef,
    0x87494ec7,
    0xd938d1c1,
    0x8ccaa2fe,
    0x98d40b36,
    0xa6f581cf,
    0xa57ade28,
    0xdab78e26,
    0x3fadbfa4,
    0x2c3a9de4,
    0x5078920d,
    0x6a5fcc9b,
    0x547e4662,
    0xf68d13c2,
    0x90d8b8e8,
    0x2e39f75e,
    0x82c3aff5,
    0x9f5d80be,
    0x69d0937c,
    0x6fd52da9,
    0xcf2512b3,
    0xc8ac993b,
    0x10187da7,
    0xe89c636e,
    0xdb3bbb7b,
    0xcd267809,
    0x6e5918f4,
    0xec9ab701,
    0x834f9aa8,
    0xe6956e65,
    0xaaffe67e,
    0x21bccf08,
    0xef15e8e6,
    0xbae79bd9,
    0x4a6f36ce,
    0xea9f09d4,
    0x29b07cd6,
    0x31a4b2af,
    0x2a3f2331,
    0xc6a59430,
    0x35a266c0,
    0x744ebc37,
    0xfc82caa6,
    0xe090d0b0,
    0x33a7d815,
    0xf104984a,
    0x41ecdaf7,
    0x7fcd500e,
    0x1791f62f,
    0x764dd68d,
    0x43efb04d,
    0xccaa4d54,
    0xe49604df,
    0x9ed1b5e3,
    0x4c6a881b,
    0xc12c1fb8,
    0x4665517f,
    0x9d5eea04,
    0x018c355d,
    0xfa877473,
    0xfb0b412e,
    0xb3671d5a,
    0x92dbd252,
    0xe9105633,
    0x6dd64713,
    0x9ad7618c,
    0x37a10c7a,
    0x59f8148e,
    0xeb133c89,
    0xcea927ee,
    0xb761c935,
    0xe11ce5ed,
    0x7a47b13c,
    0x9cd2df59,
    0x55f2733f,
    0x1814ce79,
    0x73c737bf,
    0x53f7cdea,
    0x5ffdaa5b,
    0xdf3d6f14,
    0x7844db86,
    0xcaaff381,
    0xb968c43e,
    0x3824342c,
    0xc2a3405f,
    0x161dc372,
    0xbce2250c,
    0x283c498b,
    0xff0d9541,
    0x39a80171,
    0x080cb3de,
    0xd8b4e49c,
    0x6456c190,
    0x7bcb8461,
    0xd532b670,
    0x486c5c74,
    0xd0b85742
];
const T6 = [
    0x5051f4a7,
    0x537e4165,
    0xc31a17a4,
    0x963a275e,
    0xcb3bab6b,
    0xf11f9d45,
    0xabacfa58,
    0x934be303,
    0x552030fa,
    0xf6ad766d,
    0x9188cc76,
    0x25f5024c,
    0xfc4fe5d7,
    0xd7c52acb,
    0x80263544,
    0x8fb562a3,
    0x49deb15a,
    0x6725ba1b,
    0x9845ea0e,
    0xe15dfec0,
    0x02c32f75,
    0x12814cf0,
    0xa38d4697,
    0xc66bd3f9,
    0xe7038f5f,
    0x9515929c,
    0xebbf6d7a,
    0xda955259,
    0x2dd4be83,
    0xd3587421,
    0x2949e069,
    0x448ec9c8,
    0x6a75c289,
    0x78f48e79,
    0x6b99583e,
    0xdd27b971,
    0xb6bee14f,
    0x17f088ad,
    0x66c920ac,
    0xb47dce3a,
    0x1863df4a,
    0x82e51a31,
    0x60975133,
    0x4562537f,
    0xe0b16477,
    0x84bb6bae,
    0x1cfe81a0,
    0x94f9082b,
    0x58704868,
    0x198f45fd,
    0x8794de6c,
    0xb7527bf8,
    0x23ab73d3,
    0xe2724b02,
    0x57e31f8f,
    0x2a6655ab,
    0x07b2eb28,
    0x032fb5c2,
    0x9a86c57b,
    0xa5d33708,
    0xf2302887,
    0xb223bfa5,
    0xba02036a,
    0x5ced1682,
    0x2b8acf1c,
    0x92a779b4,
    0xf0f307f2,
    0xa14e69e2,
    0xcd65daf4,
    0xd50605be,
    0x1fd13462,
    0x8ac4a6fe,
    0x9d342e53,
    0xa0a2f355,
    0x32058ae1,
    0x75a4f6eb,
    0x390b83ec,
    0xaa4060ef,
    0x065e719f,
    0x51bd6e10,
    0xf93e218a,
    0x3d96dd06,
    0xaedd3e05,
    0x464de6bd,
    0xb591548d,
    0x0571c45d,
    0x6f0406d4,
    0xff605015,
    0x241998fb,
    0x97d6bde9,
    0xcc894043,
    0x7767d99e,
    0xbdb0e842,
    0x8807898b,
    0x38e7195b,
    0xdb79c8ee,
    0x47a17c0a,
    0xe97c420f,
    0xc9f8841e,
    0x00000000,
    0x83098086,
    0x48322bed,
    0xac1e1170,
    0x4e6c5a72,
    0xfbfd0eff,
    0x560f8538,
    0x1e3daed5,
    0x27362d39,
    0x640a0fd9,
    0x21685ca6,
    0xd19b5b54,
    0x3a24362e,
    0xb10c0a67,
    0x0f9357e7,
    0xd2b4ee96,
    0x9e1b9b91,
    0x4f80c0c5,
    0xa261dc20,
    0x695a774b,
    0x161c121a,
    0x0ae293ba,
    0xe5c0a02a,
    0x433c22e0,
    0x1d121b17,
    0x0b0e090d,
    0xadf28bc7,
    0xb92db6a8,
    0xc8141ea9,
    0x8557f119,
    0x4caf7507,
    0xbbee99dd,
    0xfda37f60,
    0x9ff70126,
    0xbc5c72f5,
    0xc544663b,
    0x345bfb7e,
    0x768b4329,
    0xdccb23c6,
    0x68b6edfc,
    0x63b8e4f1,
    0xcad731dc,
    0x10426385,
    0x40139722,
    0x2084c611,
    0x7d854a24,
    0xf8d2bb3d,
    0x11aef932,
    0x6dc729a1,
    0x4b1d9e2f,
    0xf3dcb230,
    0xec0d8652,
    0xd077c1e3,
    0x6c2bb316,
    0x99a970b9,
    0xfa119448,
    0x2247e964,
    0xc4a8fc8c,
    0x1aa0f03f,
    0xd8567d2c,
    0xef223390,
    0xc787494e,
    0xc1d938d1,
    0xfe8ccaa2,
    0x3698d40b,
    0xcfa6f581,
    0x28a57ade,
    0x26dab78e,
    0xa43fadbf,
    0xe42c3a9d,
    0x0d507892,
    0x9b6a5fcc,
    0x62547e46,
    0xc2f68d13,
    0xe890d8b8,
    0x5e2e39f7,
    0xf582c3af,
    0xbe9f5d80,
    0x7c69d093,
    0xa96fd52d,
    0xb3cf2512,
    0x3bc8ac99,
    0xa710187d,
    0x6ee89c63,
    0x7bdb3bbb,
    0x09cd2678,
    0xf46e5918,
    0x01ec9ab7,
    0xa8834f9a,
    0x65e6956e,
    0x7eaaffe6,
    0x0821bccf,
    0xe6ef15e8,
    0xd9bae79b,
    0xce4a6f36,
    0xd4ea9f09,
    0xd629b07c,
    0xaf31a4b2,
    0x312a3f23,
    0x30c6a594,
    0xc035a266,
    0x37744ebc,
    0xa6fc82ca,
    0xb0e090d0,
    0x1533a7d8,
    0x4af10498,
    0xf741ecda,
    0x0e7fcd50,
    0x2f1791f6,
    0x8d764dd6,
    0x4d43efb0,
    0x54ccaa4d,
    0xdfe49604,
    0xe39ed1b5,
    0x1b4c6a88,
    0xb8c12c1f,
    0x7f466551,
    0x049d5eea,
    0x5d018c35,
    0x73fa8774,
    0x2efb0b41,
    0x5ab3671d,
    0x5292dbd2,
    0x33e91056,
    0x136dd647,
    0x8c9ad761,
    0x7a37a10c,
    0x8e59f814,
    0x89eb133c,
    0xeecea927,
    0x35b761c9,
    0xede11ce5,
    0x3c7a47b1,
    0x599cd2df,
    0x3f55f273,
    0x791814ce,
    0xbf73c737,
    0xea53f7cd,
    0x5b5ffdaa,
    0x14df3d6f,
    0x867844db,
    0x81caaff3,
    0x3eb968c4,
    0x2c382434,
    0x5fc2a340,
    0x72161dc3,
    0x0cbce225,
    0x8b283c49,
    0x41ff0d95,
    0x7139a801,
    0xde080cb3,
    0x9cd8b4e4,
    0x906456c1,
    0x617bcb84,
    0x70d532b6,
    0x74486c5c,
    0x42d0b857
];
const T7 = [
    0xa75051f4,
    0x65537e41,
    0xa4c31a17,
    0x5e963a27,
    0x6bcb3bab,
    0x45f11f9d,
    0x58abacfa,
    0x03934be3,
    0xfa552030,
    0x6df6ad76,
    0x769188cc,
    0x4c25f502,
    0xd7fc4fe5,
    0xcbd7c52a,
    0x44802635,
    0xa38fb562,
    0x5a49deb1,
    0x1b6725ba,
    0x0e9845ea,
    0xc0e15dfe,
    0x7502c32f,
    0xf012814c,
    0x97a38d46,
    0xf9c66bd3,
    0x5fe7038f,
    0x9c951592,
    0x7aebbf6d,
    0x59da9552,
    0x832dd4be,
    0x21d35874,
    0x692949e0,
    0xc8448ec9,
    0x896a75c2,
    0x7978f48e,
    0x3e6b9958,
    0x71dd27b9,
    0x4fb6bee1,
    0xad17f088,
    0xac66c920,
    0x3ab47dce,
    0x4a1863df,
    0x3182e51a,
    0x33609751,
    0x7f456253,
    0x77e0b164,
    0xae84bb6b,
    0xa01cfe81,
    0x2b94f908,
    0x68587048,
    0xfd198f45,
    0x6c8794de,
    0xf8b7527b,
    0xd323ab73,
    0x02e2724b,
    0x8f57e31f,
    0xab2a6655,
    0x2807b2eb,
    0xc2032fb5,
    0x7b9a86c5,
    0x08a5d337,
    0x87f23028,
    0xa5b223bf,
    0x6aba0203,
    0x825ced16,
    0x1c2b8acf,
    0xb492a779,
    0xf2f0f307,
    0xe2a14e69,
    0xf4cd65da,
    0xbed50605,
    0x621fd134,
    0xfe8ac4a6,
    0x539d342e,
    0x55a0a2f3,
    0xe132058a,
    0xeb75a4f6,
    0xec390b83,
    0xefaa4060,
    0x9f065e71,
    0x1051bd6e,
    0x8af93e21,
    0x063d96dd,
    0x05aedd3e,
    0xbd464de6,
    0x8db59154,
    0x5d0571c4,
    0xd46f0406,
    0x15ff6050,
    0xfb241998,
    0xe997d6bd,
    0x43cc8940,
    0x9e7767d9,
    0x42bdb0e8,
    0x8b880789,
    0x5b38e719,
    0xeedb79c8,
    0x0a47a17c,
    0x0fe97c42,
    0x1ec9f884,
    0x00000000,
    0x86830980,
    0xed48322b,
    0x70ac1e11,
    0x724e6c5a,
    0xfffbfd0e,
    0x38560f85,
    0xd51e3dae,
    0x3927362d,
    0xd9640a0f,
    0xa621685c,
    0x54d19b5b,
    0x2e3a2436,
    0x67b10c0a,
    0xe70f9357,
    0x96d2b4ee,
    0x919e1b9b,
    0xc54f80c0,
    0x20a261dc,
    0x4b695a77,
    0x1a161c12,
    0xba0ae293,
    0x2ae5c0a0,
    0xe0433c22,
    0x171d121b,
    0x0d0b0e09,
    0xc7adf28b,
    0xa8b92db6,
    0xa9c8141e,
    0x198557f1,
    0x074caf75,
    0xddbbee99,
    0x60fda37f,
    0x269ff701,
    0xf5bc5c72,
    0x3bc54466,
    0x7e345bfb,
    0x29768b43,
    0xc6dccb23,
    0xfc68b6ed,
    0xf163b8e4,
    0xdccad731,
    0x85104263,
    0x22401397,
    0x112084c6,
    0x247d854a,
    0x3df8d2bb,
    0x3211aef9,
    0xa16dc729,
    0x2f4b1d9e,
    0x30f3dcb2,
    0x52ec0d86,
    0xe3d077c1,
    0x166c2bb3,
    0xb999a970,
    0x48fa1194,
    0x642247e9,
    0x8cc4a8fc,
    0x3f1aa0f0,
    0x2cd8567d,
    0x90ef2233,
    0x4ec78749,
    0xd1c1d938,
    0xa2fe8cca,
    0x0b3698d4,
    0x81cfa6f5,
    0xde28a57a,
    0x8e26dab7,
    0xbfa43fad,
    0x9de42c3a,
    0x920d5078,
    0xcc9b6a5f,
    0x4662547e,
    0x13c2f68d,
    0xb8e890d8,
    0xf75e2e39,
    0xaff582c3,
    0x80be9f5d,
    0x937c69d0,
    0x2da96fd5,
    0x12b3cf25,
    0x993bc8ac,
    0x7da71018,
    0x636ee89c,
    0xbb7bdb3b,
    0x7809cd26,
    0x18f46e59,
    0xb701ec9a,
    0x9aa8834f,
    0x6e65e695,
    0xe67eaaff,
    0xcf0821bc,
    0xe8e6ef15,
    0x9bd9bae7,
    0x36ce4a6f,
    0x09d4ea9f,
    0x7cd629b0,
    0xb2af31a4,
    0x23312a3f,
    0x9430c6a5,
    0x66c035a2,
    0xbc37744e,
    0xcaa6fc82,
    0xd0b0e090,
    0xd81533a7,
    0x984af104,
    0xdaf741ec,
    0x500e7fcd,
    0xf62f1791,
    0xd68d764d,
    0xb04d43ef,
    0x4d54ccaa,
    0x04dfe496,
    0xb5e39ed1,
    0x881b4c6a,
    0x1fb8c12c,
    0x517f4665,
    0xea049d5e,
    0x355d018c,
    0x7473fa87,
    0x412efb0b,
    0x1d5ab367,
    0xd25292db,
    0x5633e910,
    0x47136dd6,
    0x618c9ad7,
    0x0c7a37a1,
    0x148e59f8,
    0x3c89eb13,
    0x27eecea9,
    0xc935b761,
    0xe5ede11c,
    0xb13c7a47,
    0xdf599cd2,
    0x733f55f2,
    0xce791814,
    0x37bf73c7,
    0xcdea53f7,
    0xaa5b5ffd,
    0x6f14df3d,
    0xdb867844,
    0xf381caaf,
    0xc43eb968,
    0x342c3824,
    0x405fc2a3,
    0xc372161d,
    0x250cbce2,
    0x498b283c,
    0x9541ff0d,
    0x017139a8,
    0xb3de080c,
    0xe49cd8b4,
    0xc1906456,
    0x84617bcb,
    0xb670d532,
    0x5c74486c,
    0x5742d0b8
];
const T8 = [
    0xf4a75051,
    0x4165537e,
    0x17a4c31a,
    0x275e963a,
    0xab6bcb3b,
    0x9d45f11f,
    0xfa58abac,
    0xe303934b,
    0x30fa5520,
    0x766df6ad,
    0xcc769188,
    0x024c25f5,
    0xe5d7fc4f,
    0x2acbd7c5,
    0x35448026,
    0x62a38fb5,
    0xb15a49de,
    0xba1b6725,
    0xea0e9845,
    0xfec0e15d,
    0x2f7502c3,
    0x4cf01281,
    0x4697a38d,
    0xd3f9c66b,
    0x8f5fe703,
    0x929c9515,
    0x6d7aebbf,
    0x5259da95,
    0xbe832dd4,
    0x7421d358,
    0xe0692949,
    0xc9c8448e,
    0xc2896a75,
    0x8e7978f4,
    0x583e6b99,
    0xb971dd27,
    0xe14fb6be,
    0x88ad17f0,
    0x20ac66c9,
    0xce3ab47d,
    0xdf4a1863,
    0x1a3182e5,
    0x51336097,
    0x537f4562,
    0x6477e0b1,
    0x6bae84bb,
    0x81a01cfe,
    0x082b94f9,
    0x48685870,
    0x45fd198f,
    0xde6c8794,
    0x7bf8b752,
    0x73d323ab,
    0x4b02e272,
    0x1f8f57e3,
    0x55ab2a66,
    0xeb2807b2,
    0xb5c2032f,
    0xc57b9a86,
    0x3708a5d3,
    0x2887f230,
    0xbfa5b223,
    0x036aba02,
    0x16825ced,
    0xcf1c2b8a,
    0x79b492a7,
    0x07f2f0f3,
    0x69e2a14e,
    0xdaf4cd65,
    0x05bed506,
    0x34621fd1,
    0xa6fe8ac4,
    0x2e539d34,
    0xf355a0a2,
    0x8ae13205,
    0xf6eb75a4,
    0x83ec390b,
    0x60efaa40,
    0x719f065e,
    0x6e1051bd,
    0x218af93e,
    0xdd063d96,
    0x3e05aedd,
    0xe6bd464d,
    0x548db591,
    0xc45d0571,
    0x06d46f04,
    0x5015ff60,
    0x98fb2419,
    0xbde997d6,
    0x4043cc89,
    0xd99e7767,
    0xe842bdb0,
    0x898b8807,
    0x195b38e7,
    0xc8eedb79,
    0x7c0a47a1,
    0x420fe97c,
    0x841ec9f8,
    0x00000000,
    0x80868309,
    0x2bed4832,
    0x1170ac1e,
    0x5a724e6c,
    0x0efffbfd,
    0x8538560f,
    0xaed51e3d,
    0x2d392736,
    0x0fd9640a,
    0x5ca62168,
    0x5b54d19b,
    0x362e3a24,
    0x0a67b10c,
    0x57e70f93,
    0xee96d2b4,
    0x9b919e1b,
    0xc0c54f80,
    0xdc20a261,
    0x774b695a,
    0x121a161c,
    0x93ba0ae2,
    0xa02ae5c0,
    0x22e0433c,
    0x1b171d12,
    0x090d0b0e,
    0x8bc7adf2,
    0xb6a8b92d,
    0x1ea9c814,
    0xf1198557,
    0x75074caf,
    0x99ddbbee,
    0x7f60fda3,
    0x01269ff7,
    0x72f5bc5c,
    0x663bc544,
    0xfb7e345b,
    0x4329768b,
    0x23c6dccb,
    0xedfc68b6,
    0xe4f163b8,
    0x31dccad7,
    0x63851042,
    0x97224013,
    0xc6112084,
    0x4a247d85,
    0xbb3df8d2,
    0xf93211ae,
    0x29a16dc7,
    0x9e2f4b1d,
    0xb230f3dc,
    0x8652ec0d,
    0xc1e3d077,
    0xb3166c2b,
    0x70b999a9,
    0x9448fa11,
    0xe9642247,
    0xfc8cc4a8,
    0xf03f1aa0,
    0x7d2cd856,
    0x3390ef22,
    0x494ec787,
    0x38d1c1d9,
    0xcaa2fe8c,
    0xd40b3698,
    0xf581cfa6,
    0x7ade28a5,
    0xb78e26da,
    0xadbfa43f,
    0x3a9de42c,
    0x78920d50,
    0x5fcc9b6a,
    0x7e466254,
    0x8d13c2f6,
    0xd8b8e890,
    0x39f75e2e,
    0xc3aff582,
    0x5d80be9f,
    0xd0937c69,
    0xd52da96f,
    0x2512b3cf,
    0xac993bc8,
    0x187da710,
    0x9c636ee8,
    0x3bbb7bdb,
    0x267809cd,
    0x5918f46e,
    0x9ab701ec,
    0x4f9aa883,
    0x956e65e6,
    0xffe67eaa,
    0xbccf0821,
    0x15e8e6ef,
    0xe79bd9ba,
    0x6f36ce4a,
    0x9f09d4ea,
    0xb07cd629,
    0xa4b2af31,
    0x3f23312a,
    0xa59430c6,
    0xa266c035,
    0x4ebc3774,
    0x82caa6fc,
    0x90d0b0e0,
    0xa7d81533,
    0x04984af1,
    0xecdaf741,
    0xcd500e7f,
    0x91f62f17,
    0x4dd68d76,
    0xefb04d43,
    0xaa4d54cc,
    0x9604dfe4,
    0xd1b5e39e,
    0x6a881b4c,
    0x2c1fb8c1,
    0x65517f46,
    0x5eea049d,
    0x8c355d01,
    0x877473fa,
    0x0b412efb,
    0x671d5ab3,
    0xdbd25292,
    0x105633e9,
    0xd647136d,
    0xd7618c9a,
    0xa10c7a37,
    0xf8148e59,
    0x133c89eb,
    0xa927eece,
    0x61c935b7,
    0x1ce5ede1,
    0x47b13c7a,
    0xd2df599c,
    0xf2733f55,
    0x14ce7918,
    0xc737bf73,
    0xf7cdea53,
    0xfdaa5b5f,
    0x3d6f14df,
    0x44db8678,
    0xaff381ca,
    0x68c43eb9,
    0x24342c38,
    0xa3405fc2,
    0x1dc37216,
    0xe2250cbc,
    0x3c498b28,
    0x0d9541ff,
    0xa8017139,
    0x0cb3de08,
    0xb4e49cd8,
    0x56c19064,
    0xcb84617b,
    0x32b670d5,
    0x6c5c7448,
    0xb85742d0
];
// Transformations for decryption key expansion
const U1 = [
    0x00000000,
    0x0e090d0b,
    0x1c121a16,
    0x121b171d,
    0x3824342c,
    0x362d3927,
    0x24362e3a,
    0x2a3f2331,
    0x70486858,
    0x7e416553,
    0x6c5a724e,
    0x62537f45,
    0x486c5c74,
    0x4665517f,
    0x547e4662,
    0x5a774b69,
    0xe090d0b0,
    0xee99ddbb,
    0xfc82caa6,
    0xf28bc7ad,
    0xd8b4e49c,
    0xd6bde997,
    0xc4a6fe8a,
    0xcaaff381,
    0x90d8b8e8,
    0x9ed1b5e3,
    0x8ccaa2fe,
    0x82c3aff5,
    0xa8fc8cc4,
    0xa6f581cf,
    0xb4ee96d2,
    0xbae79bd9,
    0xdb3bbb7b,
    0xd532b670,
    0xc729a16d,
    0xc920ac66,
    0xe31f8f57,
    0xed16825c,
    0xff0d9541,
    0xf104984a,
    0xab73d323,
    0xa57ade28,
    0xb761c935,
    0xb968c43e,
    0x9357e70f,
    0x9d5eea04,
    0x8f45fd19,
    0x814cf012,
    0x3bab6bcb,
    0x35a266c0,
    0x27b971dd,
    0x29b07cd6,
    0x038f5fe7,
    0x0d8652ec,
    0x1f9d45f1,
    0x119448fa,
    0x4be30393,
    0x45ea0e98,
    0x57f11985,
    0x59f8148e,
    0x73c737bf,
    0x7dce3ab4,
    0x6fd52da9,
    0x61dc20a2,
    0xad766df6,
    0xa37f60fd,
    0xb16477e0,
    0xbf6d7aeb,
    0x955259da,
    0x9b5b54d1,
    0x894043cc,
    0x87494ec7,
    0xdd3e05ae,
    0xd33708a5,
    0xc12c1fb8,
    0xcf2512b3,
    0xe51a3182,
    0xeb133c89,
    0xf9082b94,
    0xf701269f,
    0x4de6bd46,
    0x43efb04d,
    0x51f4a750,
    0x5ffdaa5b,
    0x75c2896a,
    0x7bcb8461,
    0x69d0937c,
    0x67d99e77,
    0x3daed51e,
    0x33a7d815,
    0x21bccf08,
    0x2fb5c203,
    0x058ae132,
    0x0b83ec39,
    0x1998fb24,
    0x1791f62f,
    0x764dd68d,
    0x7844db86,
    0x6a5fcc9b,
    0x6456c190,
    0x4e69e2a1,
    0x4060efaa,
    0x527bf8b7,
    0x5c72f5bc,
    0x0605bed5,
    0x080cb3de,
    0x1a17a4c3,
    0x141ea9c8,
    0x3e218af9,
    0x302887f2,
    0x223390ef,
    0x2c3a9de4,
    0x96dd063d,
    0x98d40b36,
    0x8acf1c2b,
    0x84c61120,
    0xaef93211,
    0xa0f03f1a,
    0xb2eb2807,
    0xbce2250c,
    0xe6956e65,
    0xe89c636e,
    0xfa877473,
    0xf48e7978,
    0xdeb15a49,
    0xd0b85742,
    0xc2a3405f,
    0xccaa4d54,
    0x41ecdaf7,
    0x4fe5d7fc,
    0x5dfec0e1,
    0x53f7cdea,
    0x79c8eedb,
    0x77c1e3d0,
    0x65daf4cd,
    0x6bd3f9c6,
    0x31a4b2af,
    0x3fadbfa4,
    0x2db6a8b9,
    0x23bfa5b2,
    0x09808683,
    0x07898b88,
    0x15929c95,
    0x1b9b919e,
    0xa17c0a47,
    0xaf75074c,
    0xbd6e1051,
    0xb3671d5a,
    0x99583e6b,
    0x97513360,
    0x854a247d,
    0x8b432976,
    0xd134621f,
    0xdf3d6f14,
    0xcd267809,
    0xc32f7502,
    0xe9105633,
    0xe7195b38,
    0xf5024c25,
    0xfb0b412e,
    0x9ad7618c,
    0x94de6c87,
    0x86c57b9a,
    0x88cc7691,
    0xa2f355a0,
    0xacfa58ab,
    0xbee14fb6,
    0xb0e842bd,
    0xea9f09d4,
    0xe49604df,
    0xf68d13c2,
    0xf8841ec9,
    0xd2bb3df8,
    0xdcb230f3,
    0xcea927ee,
    0xc0a02ae5,
    0x7a47b13c,
    0x744ebc37,
    0x6655ab2a,
    0x685ca621,
    0x42638510,
    0x4c6a881b,
    0x5e719f06,
    0x5078920d,
    0x0a0fd964,
    0x0406d46f,
    0x161dc372,
    0x1814ce79,
    0x322bed48,
    0x3c22e043,
    0x2e39f75e,
    0x2030fa55,
    0xec9ab701,
    0xe293ba0a,
    0xf088ad17,
    0xfe81a01c,
    0xd4be832d,
    0xdab78e26,
    0xc8ac993b,
    0xc6a59430,
    0x9cd2df59,
    0x92dbd252,
    0x80c0c54f,
    0x8ec9c844,
    0xa4f6eb75,
    0xaaffe67e,
    0xb8e4f163,
    0xb6edfc68,
    0x0c0a67b1,
    0x02036aba,
    0x10187da7,
    0x1e1170ac,
    0x342e539d,
    0x3a275e96,
    0x283c498b,
    0x26354480,
    0x7c420fe9,
    0x724b02e2,
    0x605015ff,
    0x6e5918f4,
    0x44663bc5,
    0x4a6f36ce,
    0x587421d3,
    0x567d2cd8,
    0x37a10c7a,
    0x39a80171,
    0x2bb3166c,
    0x25ba1b67,
    0x0f853856,
    0x018c355d,
    0x13972240,
    0x1d9e2f4b,
    0x47e96422,
    0x49e06929,
    0x5bfb7e34,
    0x55f2733f,
    0x7fcd500e,
    0x71c45d05,
    0x63df4a18,
    0x6dd64713,
    0xd731dcca,
    0xd938d1c1,
    0xcb23c6dc,
    0xc52acbd7,
    0xef15e8e6,
    0xe11ce5ed,
    0xf307f2f0,
    0xfd0efffb,
    0xa779b492,
    0xa970b999,
    0xbb6bae84,
    0xb562a38f,
    0x9f5d80be,
    0x91548db5,
    0x834f9aa8,
    0x8d4697a3
];
const U2 = [
    0x00000000,
    0x0b0e090d,
    0x161c121a,
    0x1d121b17,
    0x2c382434,
    0x27362d39,
    0x3a24362e,
    0x312a3f23,
    0x58704868,
    0x537e4165,
    0x4e6c5a72,
    0x4562537f,
    0x74486c5c,
    0x7f466551,
    0x62547e46,
    0x695a774b,
    0xb0e090d0,
    0xbbee99dd,
    0xa6fc82ca,
    0xadf28bc7,
    0x9cd8b4e4,
    0x97d6bde9,
    0x8ac4a6fe,
    0x81caaff3,
    0xe890d8b8,
    0xe39ed1b5,
    0xfe8ccaa2,
    0xf582c3af,
    0xc4a8fc8c,
    0xcfa6f581,
    0xd2b4ee96,
    0xd9bae79b,
    0x7bdb3bbb,
    0x70d532b6,
    0x6dc729a1,
    0x66c920ac,
    0x57e31f8f,
    0x5ced1682,
    0x41ff0d95,
    0x4af10498,
    0x23ab73d3,
    0x28a57ade,
    0x35b761c9,
    0x3eb968c4,
    0x0f9357e7,
    0x049d5eea,
    0x198f45fd,
    0x12814cf0,
    0xcb3bab6b,
    0xc035a266,
    0xdd27b971,
    0xd629b07c,
    0xe7038f5f,
    0xec0d8652,
    0xf11f9d45,
    0xfa119448,
    0x934be303,
    0x9845ea0e,
    0x8557f119,
    0x8e59f814,
    0xbf73c737,
    0xb47dce3a,
    0xa96fd52d,
    0xa261dc20,
    0xf6ad766d,
    0xfda37f60,
    0xe0b16477,
    0xebbf6d7a,
    0xda955259,
    0xd19b5b54,
    0xcc894043,
    0xc787494e,
    0xaedd3e05,
    0xa5d33708,
    0xb8c12c1f,
    0xb3cf2512,
    0x82e51a31,
    0x89eb133c,
    0x94f9082b,
    0x9ff70126,
    0x464de6bd,
    0x4d43efb0,
    0x5051f4a7,
    0x5b5ffdaa,
    0x6a75c289,
    0x617bcb84,
    0x7c69d093,
    0x7767d99e,
    0x1e3daed5,
    0x1533a7d8,
    0x0821bccf,
    0x032fb5c2,
    0x32058ae1,
    0x390b83ec,
    0x241998fb,
    0x2f1791f6,
    0x8d764dd6,
    0x867844db,
    0x9b6a5fcc,
    0x906456c1,
    0xa14e69e2,
    0xaa4060ef,
    0xb7527bf8,
    0xbc5c72f5,
    0xd50605be,
    0xde080cb3,
    0xc31a17a4,
    0xc8141ea9,
    0xf93e218a,
    0xf2302887,
    0xef223390,
    0xe42c3a9d,
    0x3d96dd06,
    0x3698d40b,
    0x2b8acf1c,
    0x2084c611,
    0x11aef932,
    0x1aa0f03f,
    0x07b2eb28,
    0x0cbce225,
    0x65e6956e,
    0x6ee89c63,
    0x73fa8774,
    0x78f48e79,
    0x49deb15a,
    0x42d0b857,
    0x5fc2a340,
    0x54ccaa4d,
    0xf741ecda,
    0xfc4fe5d7,
    0xe15dfec0,
    0xea53f7cd,
    0xdb79c8ee,
    0xd077c1e3,
    0xcd65daf4,
    0xc66bd3f9,
    0xaf31a4b2,
    0xa43fadbf,
    0xb92db6a8,
    0xb223bfa5,
    0x83098086,
    0x8807898b,
    0x9515929c,
    0x9e1b9b91,
    0x47a17c0a,
    0x4caf7507,
    0x51bd6e10,
    0x5ab3671d,
    0x6b99583e,
    0x60975133,
    0x7d854a24,
    0x768b4329,
    0x1fd13462,
    0x14df3d6f,
    0x09cd2678,
    0x02c32f75,
    0x33e91056,
    0x38e7195b,
    0x25f5024c,
    0x2efb0b41,
    0x8c9ad761,
    0x8794de6c,
    0x9a86c57b,
    0x9188cc76,
    0xa0a2f355,
    0xabacfa58,
    0xb6bee14f,
    0xbdb0e842,
    0xd4ea9f09,
    0xdfe49604,
    0xc2f68d13,
    0xc9f8841e,
    0xf8d2bb3d,
    0xf3dcb230,
    0xeecea927,
    0xe5c0a02a,
    0x3c7a47b1,
    0x37744ebc,
    0x2a6655ab,
    0x21685ca6,
    0x10426385,
    0x1b4c6a88,
    0x065e719f,
    0x0d507892,
    0x640a0fd9,
    0x6f0406d4,
    0x72161dc3,
    0x791814ce,
    0x48322bed,
    0x433c22e0,
    0x5e2e39f7,
    0x552030fa,
    0x01ec9ab7,
    0x0ae293ba,
    0x17f088ad,
    0x1cfe81a0,
    0x2dd4be83,
    0x26dab78e,
    0x3bc8ac99,
    0x30c6a594,
    0x599cd2df,
    0x5292dbd2,
    0x4f80c0c5,
    0x448ec9c8,
    0x75a4f6eb,
    0x7eaaffe6,
    0x63b8e4f1,
    0x68b6edfc,
    0xb10c0a67,
    0xba02036a,
    0xa710187d,
    0xac1e1170,
    0x9d342e53,
    0x963a275e,
    0x8b283c49,
    0x80263544,
    0xe97c420f,
    0xe2724b02,
    0xff605015,
    0xf46e5918,
    0xc544663b,
    0xce4a6f36,
    0xd3587421,
    0xd8567d2c,
    0x7a37a10c,
    0x7139a801,
    0x6c2bb316,
    0x6725ba1b,
    0x560f8538,
    0x5d018c35,
    0x40139722,
    0x4b1d9e2f,
    0x2247e964,
    0x2949e069,
    0x345bfb7e,
    0x3f55f273,
    0x0e7fcd50,
    0x0571c45d,
    0x1863df4a,
    0x136dd647,
    0xcad731dc,
    0xc1d938d1,
    0xdccb23c6,
    0xd7c52acb,
    0xe6ef15e8,
    0xede11ce5,
    0xf0f307f2,
    0xfbfd0eff,
    0x92a779b4,
    0x99a970b9,
    0x84bb6bae,
    0x8fb562a3,
    0xbe9f5d80,
    0xb591548d,
    0xa8834f9a,
    0xa38d4697
];
const U3 = [
    0x00000000,
    0x0d0b0e09,
    0x1a161c12,
    0x171d121b,
    0x342c3824,
    0x3927362d,
    0x2e3a2436,
    0x23312a3f,
    0x68587048,
    0x65537e41,
    0x724e6c5a,
    0x7f456253,
    0x5c74486c,
    0x517f4665,
    0x4662547e,
    0x4b695a77,
    0xd0b0e090,
    0xddbbee99,
    0xcaa6fc82,
    0xc7adf28b,
    0xe49cd8b4,
    0xe997d6bd,
    0xfe8ac4a6,
    0xf381caaf,
    0xb8e890d8,
    0xb5e39ed1,
    0xa2fe8cca,
    0xaff582c3,
    0x8cc4a8fc,
    0x81cfa6f5,
    0x96d2b4ee,
    0x9bd9bae7,
    0xbb7bdb3b,
    0xb670d532,
    0xa16dc729,
    0xac66c920,
    0x8f57e31f,
    0x825ced16,
    0x9541ff0d,
    0x984af104,
    0xd323ab73,
    0xde28a57a,
    0xc935b761,
    0xc43eb968,
    0xe70f9357,
    0xea049d5e,
    0xfd198f45,
    0xf012814c,
    0x6bcb3bab,
    0x66c035a2,
    0x71dd27b9,
    0x7cd629b0,
    0x5fe7038f,
    0x52ec0d86,
    0x45f11f9d,
    0x48fa1194,
    0x03934be3,
    0x0e9845ea,
    0x198557f1,
    0x148e59f8,
    0x37bf73c7,
    0x3ab47dce,
    0x2da96fd5,
    0x20a261dc,
    0x6df6ad76,
    0x60fda37f,
    0x77e0b164,
    0x7aebbf6d,
    0x59da9552,
    0x54d19b5b,
    0x43cc8940,
    0x4ec78749,
    0x05aedd3e,
    0x08a5d337,
    0x1fb8c12c,
    0x12b3cf25,
    0x3182e51a,
    0x3c89eb13,
    0x2b94f908,
    0x269ff701,
    0xbd464de6,
    0xb04d43ef,
    0xa75051f4,
    0xaa5b5ffd,
    0x896a75c2,
    0x84617bcb,
    0x937c69d0,
    0x9e7767d9,
    0xd51e3dae,
    0xd81533a7,
    0xcf0821bc,
    0xc2032fb5,
    0xe132058a,
    0xec390b83,
    0xfb241998,
    0xf62f1791,
    0xd68d764d,
    0xdb867844,
    0xcc9b6a5f,
    0xc1906456,
    0xe2a14e69,
    0xefaa4060,
    0xf8b7527b,
    0xf5bc5c72,
    0xbed50605,
    0xb3de080c,
    0xa4c31a17,
    0xa9c8141e,
    0x8af93e21,
    0x87f23028,
    0x90ef2233,
    0x9de42c3a,
    0x063d96dd,
    0x0b3698d4,
    0x1c2b8acf,
    0x112084c6,
    0x3211aef9,
    0x3f1aa0f0,
    0x2807b2eb,
    0x250cbce2,
    0x6e65e695,
    0x636ee89c,
    0x7473fa87,
    0x7978f48e,
    0x5a49deb1,
    0x5742d0b8,
    0x405fc2a3,
    0x4d54ccaa,
    0xdaf741ec,
    0xd7fc4fe5,
    0xc0e15dfe,
    0xcdea53f7,
    0xeedb79c8,
    0xe3d077c1,
    0xf4cd65da,
    0xf9c66bd3,
    0xb2af31a4,
    0xbfa43fad,
    0xa8b92db6,
    0xa5b223bf,
    0x86830980,
    0x8b880789,
    0x9c951592,
    0x919e1b9b,
    0x0a47a17c,
    0x074caf75,
    0x1051bd6e,
    0x1d5ab367,
    0x3e6b9958,
    0x33609751,
    0x247d854a,
    0x29768b43,
    0x621fd134,
    0x6f14df3d,
    0x7809cd26,
    0x7502c32f,
    0x5633e910,
    0x5b38e719,
    0x4c25f502,
    0x412efb0b,
    0x618c9ad7,
    0x6c8794de,
    0x7b9a86c5,
    0x769188cc,
    0x55a0a2f3,
    0x58abacfa,
    0x4fb6bee1,
    0x42bdb0e8,
    0x09d4ea9f,
    0x04dfe496,
    0x13c2f68d,
    0x1ec9f884,
    0x3df8d2bb,
    0x30f3dcb2,
    0x27eecea9,
    0x2ae5c0a0,
    0xb13c7a47,
    0xbc37744e,
    0xab2a6655,
    0xa621685c,
    0x85104263,
    0x881b4c6a,
    0x9f065e71,
    0x920d5078,
    0xd9640a0f,
    0xd46f0406,
    0xc372161d,
    0xce791814,
    0xed48322b,
    0xe0433c22,
    0xf75e2e39,
    0xfa552030,
    0xb701ec9a,
    0xba0ae293,
    0xad17f088,
    0xa01cfe81,
    0x832dd4be,
    0x8e26dab7,
    0x993bc8ac,
    0x9430c6a5,
    0xdf599cd2,
    0xd25292db,
    0xc54f80c0,
    0xc8448ec9,
    0xeb75a4f6,
    0xe67eaaff,
    0xf163b8e4,
    0xfc68b6ed,
    0x67b10c0a,
    0x6aba0203,
    0x7da71018,
    0x70ac1e11,
    0x539d342e,
    0x5e963a27,
    0x498b283c,
    0x44802635,
    0x0fe97c42,
    0x02e2724b,
    0x15ff6050,
    0x18f46e59,
    0x3bc54466,
    0x36ce4a6f,
    0x21d35874,
    0x2cd8567d,
    0x0c7a37a1,
    0x017139a8,
    0x166c2bb3,
    0x1b6725ba,
    0x38560f85,
    0x355d018c,
    0x22401397,
    0x2f4b1d9e,
    0x642247e9,
    0x692949e0,
    0x7e345bfb,
    0x733f55f2,
    0x500e7fcd,
    0x5d0571c4,
    0x4a1863df,
    0x47136dd6,
    0xdccad731,
    0xd1c1d938,
    0xc6dccb23,
    0xcbd7c52a,
    0xe8e6ef15,
    0xe5ede11c,
    0xf2f0f307,
    0xfffbfd0e,
    0xb492a779,
    0xb999a970,
    0xae84bb6b,
    0xa38fb562,
    0x80be9f5d,
    0x8db59154,
    0x9aa8834f,
    0x97a38d46
];
const U4 = [
    0x00000000,
    0x090d0b0e,
    0x121a161c,
    0x1b171d12,
    0x24342c38,
    0x2d392736,
    0x362e3a24,
    0x3f23312a,
    0x48685870,
    0x4165537e,
    0x5a724e6c,
    0x537f4562,
    0x6c5c7448,
    0x65517f46,
    0x7e466254,
    0x774b695a,
    0x90d0b0e0,
    0x99ddbbee,
    0x82caa6fc,
    0x8bc7adf2,
    0xb4e49cd8,
    0xbde997d6,
    0xa6fe8ac4,
    0xaff381ca,
    0xd8b8e890,
    0xd1b5e39e,
    0xcaa2fe8c,
    0xc3aff582,
    0xfc8cc4a8,
    0xf581cfa6,
    0xee96d2b4,
    0xe79bd9ba,
    0x3bbb7bdb,
    0x32b670d5,
    0x29a16dc7,
    0x20ac66c9,
    0x1f8f57e3,
    0x16825ced,
    0x0d9541ff,
    0x04984af1,
    0x73d323ab,
    0x7ade28a5,
    0x61c935b7,
    0x68c43eb9,
    0x57e70f93,
    0x5eea049d,
    0x45fd198f,
    0x4cf01281,
    0xab6bcb3b,
    0xa266c035,
    0xb971dd27,
    0xb07cd629,
    0x8f5fe703,
    0x8652ec0d,
    0x9d45f11f,
    0x9448fa11,
    0xe303934b,
    0xea0e9845,
    0xf1198557,
    0xf8148e59,
    0xc737bf73,
    0xce3ab47d,
    0xd52da96f,
    0xdc20a261,
    0x766df6ad,
    0x7f60fda3,
    0x6477e0b1,
    0x6d7aebbf,
    0x5259da95,
    0x5b54d19b,
    0x4043cc89,
    0x494ec787,
    0x3e05aedd,
    0x3708a5d3,
    0x2c1fb8c1,
    0x2512b3cf,
    0x1a3182e5,
    0x133c89eb,
    0x082b94f9,
    0x01269ff7,
    0xe6bd464d,
    0xefb04d43,
    0xf4a75051,
    0xfdaa5b5f,
    0xc2896a75,
    0xcb84617b,
    0xd0937c69,
    0xd99e7767,
    0xaed51e3d,
    0xa7d81533,
    0xbccf0821,
    0xb5c2032f,
    0x8ae13205,
    0x83ec390b,
    0x98fb2419,
    0x91f62f17,
    0x4dd68d76,
    0x44db8678,
    0x5fcc9b6a,
    0x56c19064,
    0x69e2a14e,
    0x60efaa40,
    0x7bf8b752,
    0x72f5bc5c,
    0x05bed506,
    0x0cb3de08,
    0x17a4c31a,
    0x1ea9c814,
    0x218af93e,
    0x2887f230,
    0x3390ef22,
    0x3a9de42c,
    0xdd063d96,
    0xd40b3698,
    0xcf1c2b8a,
    0xc6112084,
    0xf93211ae,
    0xf03f1aa0,
    0xeb2807b2,
    0xe2250cbc,
    0x956e65e6,
    0x9c636ee8,
    0x877473fa,
    0x8e7978f4,
    0xb15a49de,
    0xb85742d0,
    0xa3405fc2,
    0xaa4d54cc,
    0xecdaf741,
    0xe5d7fc4f,
    0xfec0e15d,
    0xf7cdea53,
    0xc8eedb79,
    0xc1e3d077,
    0xdaf4cd65,
    0xd3f9c66b,
    0xa4b2af31,
    0xadbfa43f,
    0xb6a8b92d,
    0xbfa5b223,
    0x80868309,
    0x898b8807,
    0x929c9515,
    0x9b919e1b,
    0x7c0a47a1,
    0x75074caf,
    0x6e1051bd,
    0x671d5ab3,
    0x583e6b99,
    0x51336097,
    0x4a247d85,
    0x4329768b,
    0x34621fd1,
    0x3d6f14df,
    0x267809cd,
    0x2f7502c3,
    0x105633e9,
    0x195b38e7,
    0x024c25f5,
    0x0b412efb,
    0xd7618c9a,
    0xde6c8794,
    0xc57b9a86,
    0xcc769188,
    0xf355a0a2,
    0xfa58abac,
    0xe14fb6be,
    0xe842bdb0,
    0x9f09d4ea,
    0x9604dfe4,
    0x8d13c2f6,
    0x841ec9f8,
    0xbb3df8d2,
    0xb230f3dc,
    0xa927eece,
    0xa02ae5c0,
    0x47b13c7a,
    0x4ebc3774,
    0x55ab2a66,
    0x5ca62168,
    0x63851042,
    0x6a881b4c,
    0x719f065e,
    0x78920d50,
    0x0fd9640a,
    0x06d46f04,
    0x1dc37216,
    0x14ce7918,
    0x2bed4832,
    0x22e0433c,
    0x39f75e2e,
    0x30fa5520,
    0x9ab701ec,
    0x93ba0ae2,
    0x88ad17f0,
    0x81a01cfe,
    0xbe832dd4,
    0xb78e26da,
    0xac993bc8,
    0xa59430c6,
    0xd2df599c,
    0xdbd25292,
    0xc0c54f80,
    0xc9c8448e,
    0xf6eb75a4,
    0xffe67eaa,
    0xe4f163b8,
    0xedfc68b6,
    0x0a67b10c,
    0x036aba02,
    0x187da710,
    0x1170ac1e,
    0x2e539d34,
    0x275e963a,
    0x3c498b28,
    0x35448026,
    0x420fe97c,
    0x4b02e272,
    0x5015ff60,
    0x5918f46e,
    0x663bc544,
    0x6f36ce4a,
    0x7421d358,
    0x7d2cd856,
    0xa10c7a37,
    0xa8017139,
    0xb3166c2b,
    0xba1b6725,
    0x8538560f,
    0x8c355d01,
    0x97224013,
    0x9e2f4b1d,
    0xe9642247,
    0xe0692949,
    0xfb7e345b,
    0xf2733f55,
    0xcd500e7f,
    0xc45d0571,
    0xdf4a1863,
    0xd647136d,
    0x31dccad7,
    0x38d1c1d9,
    0x23c6dccb,
    0x2acbd7c5,
    0x15e8e6ef,
    0x1ce5ede1,
    0x07f2f0f3,
    0x0efffbfd,
    0x79b492a7,
    0x70b999a9,
    0x6bae84bb,
    0x62a38fb5,
    0x5d80be9f,
    0x548db591,
    0x4f9aa883,
    0x4697a38d
];
function convertToInt32(bytes) {
    const result = [];
    for(let i = 0; i < bytes.length; i += 4){
        result.push(bytes[i] << 24 | bytes[i + 1] << 16 | bytes[i + 2] << 8 | bytes[i + 3]);
    }
    return result;
}
class AES {
    get key() {
        return __classPrivateFieldGet(this, _AES_key, "f").slice();
    }
    constructor(key){
        _AES_key.set(this, void 0);
        _AES_Kd.set(this, void 0);
        _AES_Ke.set(this, void 0);
        if (!(this instanceof AES)) {
            throw Error('AES must be instanitated with `new`');
        }
        __classPrivateFieldSet(this, _AES_key, new Uint8Array(key), "f");
        const rounds = numberOfRounds[this.key.length];
        if (rounds == null) {
            throw new TypeError('invalid key size (must be 16, 24 or 32 bytes)');
        }
        // encryption round keys
        __classPrivateFieldSet(this, _AES_Ke, [], "f");
        // decryption round keys
        __classPrivateFieldSet(this, _AES_Kd, [], "f");
        for(let i = 0; i <= rounds; i++){
            __classPrivateFieldGet(this, _AES_Ke, "f").push([
                0,
                0,
                0,
                0
            ]);
            __classPrivateFieldGet(this, _AES_Kd, "f").push([
                0,
                0,
                0,
                0
            ]);
        }
        const roundKeyCount = (rounds + 1) * 4;
        const KC = this.key.length / 4;
        // convert the key into ints
        const tk = convertToInt32(this.key);
        // copy values into round key arrays
        let index;
        for(let i = 0; i < KC; i++){
            index = i >> 2;
            __classPrivateFieldGet(this, _AES_Ke, "f")[index][i % 4] = tk[i];
            __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - index][i % 4] = tk[i];
        }
        // key expansion (fips-197 section 5.2)
        let rconpointer = 0;
        let t = KC, tt;
        while(t < roundKeyCount){
            tt = tk[KC - 1];
            tk[0] ^= S[tt >> 16 & 0xFF] << 24 ^ S[tt >> 8 & 0xFF] << 16 ^ S[tt & 0xFF] << 8 ^ S[tt >> 24 & 0xFF] ^ rcon[rconpointer] << 24;
            rconpointer += 1;
            // key expansion (for non-256 bit)
            if (KC != 8) {
                for(let i = 1; i < KC; i++){
                    tk[i] ^= tk[i - 1];
                }
            // key expansion for 256-bit keys is "slightly different" (fips-197)
            } else {
                for(let i = 1; i < KC / 2; i++){
                    tk[i] ^= tk[i - 1];
                }
                tt = tk[KC / 2 - 1];
                tk[KC / 2] ^= S[tt & 0xFF] ^ S[tt >> 8 & 0xFF] << 8 ^ S[tt >> 16 & 0xFF] << 16 ^ S[tt >> 24 & 0xFF] << 24;
                for(let i = KC / 2 + 1; i < KC; i++){
                    tk[i] ^= tk[i - 1];
                }
            }
            // copy values into round key arrays
            let i = 0, r, c;
            while(i < KC && t < roundKeyCount){
                r = t >> 2;
                c = t % 4;
                __classPrivateFieldGet(this, _AES_Ke, "f")[r][c] = tk[i];
                __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - r][c] = tk[i++];
                t++;
            }
        }
        // inverse-cipher-ify the decryption round key (fips-197 section 5.3)
        for(let r = 1; r < rounds; r++){
            for(let c = 0; c < 4; c++){
                tt = __classPrivateFieldGet(this, _AES_Kd, "f")[r][c];
                __classPrivateFieldGet(this, _AES_Kd, "f")[r][c] = U1[tt >> 24 & 0xFF] ^ U2[tt >> 16 & 0xFF] ^ U3[tt >> 8 & 0xFF] ^ U4[tt & 0xFF];
            }
        }
    }
    encrypt(plaintext) {
        if (plaintext.length != 16) {
            throw new TypeError('invalid plaintext size (must be 16 bytes)');
        }
        const rounds = __classPrivateFieldGet(this, _AES_Ke, "f").length - 1;
        const a = [
            0,
            0,
            0,
            0
        ];
        // convert plaintext to (ints ^ key)
        let t = convertToInt32(plaintext);
        for(let i = 0; i < 4; i++){
            t[i] ^= __classPrivateFieldGet(this, _AES_Ke, "f")[0][i];
        }
        // apply round transforms
        for(let r = 1; r < rounds; r++){
            for(let i = 0; i < 4; i++){
                a[i] = T1[t[i] >> 24 & 0xff] ^ T2[t[(i + 1) % 4] >> 16 & 0xff] ^ T3[t[(i + 2) % 4] >> 8 & 0xff] ^ T4[t[(i + 3) % 4] & 0xff] ^ __classPrivateFieldGet(this, _AES_Ke, "f")[r][i];
            }
            t = a.slice();
        }
        // the last round is special
        const result = new Uint8Array(16);
        let tt = 0;
        for(let i = 0; i < 4; i++){
            tt = __classPrivateFieldGet(this, _AES_Ke, "f")[rounds][i];
            result[4 * i] = (S[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
            result[4 * i + 1] = (S[t[(i + 1) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
            result[4 * i + 2] = (S[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
            result[4 * i + 3] = (S[t[(i + 3) % 4] & 0xff] ^ tt) & 0xff;
        }
        return result;
    }
    decrypt(ciphertext) {
        if (ciphertext.length != 16) {
            throw new TypeError('invalid ciphertext size (must be 16 bytes)');
        }
        const rounds = __classPrivateFieldGet(this, _AES_Kd, "f").length - 1;
        const a = [
            0,
            0,
            0,
            0
        ];
        // convert plaintext to (ints ^ key)
        let t = convertToInt32(ciphertext);
        for(let i = 0; i < 4; i++){
            t[i] ^= __classPrivateFieldGet(this, _AES_Kd, "f")[0][i];
        }
        // apply round transforms
        for(let r = 1; r < rounds; r++){
            for(let i = 0; i < 4; i++){
                a[i] = T5[t[i] >> 24 & 0xff] ^ T6[t[(i + 3) % 4] >> 16 & 0xff] ^ T7[t[(i + 2) % 4] >> 8 & 0xff] ^ T8[t[(i + 1) % 4] & 0xff] ^ __classPrivateFieldGet(this, _AES_Kd, "f")[r][i];
            }
            t = a.slice();
        }
        // the last round is special
        const result = new Uint8Array(16);
        let tt = 0;
        for(let i = 0; i < 4; i++){
            tt = __classPrivateFieldGet(this, _AES_Kd, "f")[rounds][i];
            result[4 * i] = (Si[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
            result[4 * i + 1] = (Si[t[(i + 3) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
            result[4 * i + 2] = (Si[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
            result[4 * i + 3] = (Si[t[(i + 1) % 4] & 0xff] ^ tt) & 0xff;
        }
        return result;
    }
}
_AES_key = new WeakMap(), _AES_Kd = new WeakMap(), _AES_Ke = new WeakMap(); //# sourceMappingURL=aes.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeOfOperation",
    ()=>ModeOfOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$aes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/aes.js [app-ssr] (ecmascript)");
;
class ModeOfOperation {
    constructor(name, key, cls){
        if (cls && !(this instanceof cls)) {
            throw new Error(`${name} must be instantiated with "new"`);
        }
        Object.defineProperties(this, {
            aes: {
                enumerable: true,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$aes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AES"](key)
            },
            name: {
                enumerable: true,
                value: name
            }
        });
    }
} //# sourceMappingURL=mode.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-cbc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cipher Block Chaining
__turbopack_context__.s([
    "CBC",
    ()=>CBC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-ssr] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CBC_iv, _CBC_lastBlock;
;
class CBC extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key, iv){
        super("ECC", key, CBC);
        _CBC_iv.set(this, void 0);
        _CBC_lastBlock.set(this, void 0);
        if (iv) {
            if (iv.length % 16) {
                throw new TypeError("invalid iv size (must be 16 bytes)");
            }
            __classPrivateFieldSet(this, _CBC_iv, new Uint8Array(iv), "f");
        } else {
            __classPrivateFieldSet(this, _CBC_iv, new Uint8Array(16), "f");
        }
        __classPrivateFieldSet(this, _CBC_lastBlock, this.iv, "f");
    }
    get iv() {
        return new Uint8Array(__classPrivateFieldGet(this, _CBC_iv, "f"));
    }
    encrypt(plaintext) {
        if (plaintext.length % 16) {
            throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
        }
        const ciphertext = new Uint8Array(plaintext.length);
        for(let i = 0; i < plaintext.length; i += 16){
            for(let j = 0; j < 16; j++){
                __classPrivateFieldGet(this, _CBC_lastBlock, "f")[j] ^= plaintext[i + j];
            }
            __classPrivateFieldSet(this, _CBC_lastBlock, this.aes.encrypt(__classPrivateFieldGet(this, _CBC_lastBlock, "f")), "f");
            ciphertext.set(__classPrivateFieldGet(this, _CBC_lastBlock, "f"), i);
        }
        return ciphertext;
    }
    decrypt(ciphertext) {
        if (ciphertext.length % 16) {
            throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
        }
        const plaintext = new Uint8Array(ciphertext.length);
        for(let i = 0; i < ciphertext.length; i += 16){
            const block = this.aes.decrypt(ciphertext.subarray(i, i + 16));
            for(let j = 0; j < 16; j++){
                plaintext[i + j] = block[j] ^ __classPrivateFieldGet(this, _CBC_lastBlock, "f")[j];
                __classPrivateFieldGet(this, _CBC_lastBlock, "f")[j] = ciphertext[i + j];
            }
        }
        return plaintext;
    }
}
_CBC_iv = new WeakMap(), _CBC_lastBlock = new WeakMap(); //# sourceMappingURL=mode-cbc.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-cfb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cipher Feedback
__turbopack_context__.s([
    "CFB",
    ()=>CFB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-ssr] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CFB_instances, _CFB_iv, _CFB_shiftRegister, _CFB_shift;
;
class CFB extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key, iv, segmentSize = 8){
        super("CFB", key, CFB);
        _CFB_instances.add(this);
        _CFB_iv.set(this, void 0);
        _CFB_shiftRegister.set(this, void 0);
        // This library currently only handles byte-aligned segmentSize
        if (!Number.isInteger(segmentSize) || segmentSize % 8) {
            throw new TypeError("invalid segmentSize");
        }
        Object.defineProperties(this, {
            segmentSize: {
                enumerable: true,
                value: segmentSize
            }
        });
        if (iv) {
            if (iv.length % 16) {
                throw new TypeError("invalid iv size (must be 16 bytes)");
            }
            __classPrivateFieldSet(this, _CFB_iv, new Uint8Array(iv), "f");
        } else {
            __classPrivateFieldSet(this, _CFB_iv, new Uint8Array(16), "f");
        }
        __classPrivateFieldSet(this, _CFB_shiftRegister, this.iv, "f");
    }
    get iv() {
        return new Uint8Array(__classPrivateFieldGet(this, _CFB_iv, "f"));
    }
    encrypt(plaintext) {
        if (8 * plaintext.length % this.segmentSize) {
            throw new TypeError("invalid plaintext size (must be multiple of segmentSize bytes)");
        }
        const segmentSize = this.segmentSize / 8;
        const ciphertext = new Uint8Array(plaintext);
        for(let i = 0; i < ciphertext.length; i += segmentSize){
            const xorSegment = this.aes.encrypt(__classPrivateFieldGet(this, _CFB_shiftRegister, "f"));
            for(let j = 0; j < segmentSize; j++){
                ciphertext[i + j] ^= xorSegment[j];
            }
            __classPrivateFieldGet(this, _CFB_instances, "m", _CFB_shift).call(this, ciphertext.subarray(i));
        }
        return ciphertext;
    }
    decrypt(ciphertext) {
        if (8 * ciphertext.length % this.segmentSize) {
            throw new TypeError("invalid ciphertext size (must be multiple of segmentSize bytes)");
        }
        const segmentSize = this.segmentSize / 8;
        const plaintext = new Uint8Array(ciphertext);
        for(let i = 0; i < plaintext.length; i += segmentSize){
            const xorSegment = this.aes.encrypt(__classPrivateFieldGet(this, _CFB_shiftRegister, "f"));
            for(let j = 0; j < segmentSize; j++){
                plaintext[i + j] ^= xorSegment[j];
            }
            __classPrivateFieldGet(this, _CFB_instances, "m", _CFB_shift).call(this, ciphertext.subarray(i));
        }
        return plaintext;
    }
}
_CFB_iv = new WeakMap(), _CFB_shiftRegister = new WeakMap(), _CFB_instances = new WeakSet(), _CFB_shift = function _CFB_shift(data) {
    const segmentSize = this.segmentSize / 8;
    // Shift the register
    __classPrivateFieldGet(this, _CFB_shiftRegister, "f").set(__classPrivateFieldGet(this, _CFB_shiftRegister, "f").subarray(segmentSize));
    __classPrivateFieldGet(this, _CFB_shiftRegister, "f").set(data.subarray(0, segmentSize), 16 - segmentSize);
}; //# sourceMappingURL=mode-cfb.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-ctr.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Counter Mode
__turbopack_context__.s([
    "CTR",
    ()=>CTR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-ssr] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CTR_remaining, _CTR_remainingIndex, _CTR_counter;
;
class CTR extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key, initialValue){
        super("CTR", key, CTR);
        // Remaining bytes for the one-time pad
        _CTR_remaining.set(this, void 0);
        _CTR_remainingIndex.set(this, void 0);
        // The current counter
        _CTR_counter.set(this, void 0);
        __classPrivateFieldSet(this, _CTR_counter, new Uint8Array(16), "f");
        __classPrivateFieldGet(this, _CTR_counter, "f").fill(0);
        __classPrivateFieldSet(this, _CTR_remaining, __classPrivateFieldGet(this, _CTR_counter, "f"), "f"); // This will be discarded immediately
        __classPrivateFieldSet(this, _CTR_remainingIndex, 16, "f");
        if (initialValue == null) {
            initialValue = 1;
        }
        if (typeof initialValue === "number") {
            this.setCounterValue(initialValue);
        } else {
            this.setCounterBytes(initialValue);
        }
    }
    get counter() {
        return new Uint8Array(__classPrivateFieldGet(this, _CTR_counter, "f"));
    }
    setCounterValue(value) {
        if (!Number.isInteger(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) {
            throw new TypeError("invalid counter initial integer value");
        }
        for(let index = 15; index >= 0; --index){
            __classPrivateFieldGet(this, _CTR_counter, "f")[index] = value % 256;
            value = Math.floor(value / 256);
        }
    }
    setCounterBytes(value) {
        if (value.length !== 16) {
            throw new TypeError("invalid counter initial Uint8Array value length");
        }
        __classPrivateFieldGet(this, _CTR_counter, "f").set(value);
    }
    increment() {
        for(let i = 15; i >= 0; i--){
            if (__classPrivateFieldGet(this, _CTR_counter, "f")[i] === 255) {
                __classPrivateFieldGet(this, _CTR_counter, "f")[i] = 0;
            } else {
                __classPrivateFieldGet(this, _CTR_counter, "f")[i]++;
                break;
            }
        }
    }
    encrypt(plaintext) {
        var _a, _b;
        const crypttext = new Uint8Array(plaintext);
        for(let i = 0; i < crypttext.length; i++){
            if (__classPrivateFieldGet(this, _CTR_remainingIndex, "f") === 16) {
                __classPrivateFieldSet(this, _CTR_remaining, this.aes.encrypt(__classPrivateFieldGet(this, _CTR_counter, "f")), "f");
                __classPrivateFieldSet(this, _CTR_remainingIndex, 0, "f");
                this.increment();
            }
            crypttext[i] ^= __classPrivateFieldGet(this, _CTR_remaining, "f")[__classPrivateFieldSet(this, _CTR_remainingIndex, (_b = __classPrivateFieldGet(this, _CTR_remainingIndex, "f"), _a = _b++, _b), "f"), _a];
        }
        return crypttext;
    }
    decrypt(ciphertext) {
        return this.encrypt(ciphertext);
    }
}
_CTR_remaining = new WeakMap(), _CTR_remainingIndex = new WeakMap(), _CTR_counter = new WeakMap(); //# sourceMappingURL=mode-ctr.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-ecb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Electronic Code Book
__turbopack_context__.s([
    "ECB",
    ()=>ECB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-ssr] (ecmascript)");
;
class ECB extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key){
        super("ECB", key, ECB);
    }
    encrypt(plaintext) {
        if (plaintext.length % 16) {
            throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
        }
        const crypttext = new Uint8Array(plaintext.length);
        for(let i = 0; i < plaintext.length; i += 16){
            crypttext.set(this.aes.encrypt(plaintext.subarray(i, i + 16)), i);
        }
        return crypttext;
    }
    decrypt(crypttext) {
        if (crypttext.length % 16) {
            throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
        }
        const plaintext = new Uint8Array(crypttext.length);
        for(let i = 0; i < crypttext.length; i += 16){
            plaintext.set(this.aes.decrypt(crypttext.subarray(i, i + 16)), i);
        }
        return plaintext;
    }
} //# sourceMappingURL=mode-ecb.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/mode-ofb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Output Feedback
__turbopack_context__.s([
    "OFB",
    ()=>OFB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-ssr] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OFB_iv, _OFB_lastPrecipher, _OFB_lastPrecipherIndex;
;
class OFB extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeOfOperation"] {
    constructor(key, iv){
        super("OFB", key, OFB);
        _OFB_iv.set(this, void 0);
        _OFB_lastPrecipher.set(this, void 0);
        _OFB_lastPrecipherIndex.set(this, void 0);
        if (iv) {
            if (iv.length % 16) {
                throw new TypeError("invalid iv size (must be 16 bytes)");
            }
            __classPrivateFieldSet(this, _OFB_iv, new Uint8Array(iv), "f");
        } else {
            __classPrivateFieldSet(this, _OFB_iv, new Uint8Array(16), "f");
        }
        __classPrivateFieldSet(this, _OFB_lastPrecipher, this.iv, "f");
        __classPrivateFieldSet(this, _OFB_lastPrecipherIndex, 16, "f");
    }
    get iv() {
        return new Uint8Array(__classPrivateFieldGet(this, _OFB_iv, "f"));
    }
    encrypt(plaintext) {
        var _a, _b;
        if (plaintext.length % 16) {
            throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
        }
        const ciphertext = new Uint8Array(plaintext);
        for(let i = 0; i < ciphertext.length; i++){
            if (__classPrivateFieldGet(this, _OFB_lastPrecipherIndex, "f") === 16) {
                __classPrivateFieldSet(this, _OFB_lastPrecipher, this.aes.encrypt(__classPrivateFieldGet(this, _OFB_lastPrecipher, "f")), "f");
                __classPrivateFieldSet(this, _OFB_lastPrecipherIndex, 0, "f");
            }
            ciphertext[i] ^= __classPrivateFieldGet(this, _OFB_lastPrecipher, "f")[__classPrivateFieldSet(this, _OFB_lastPrecipherIndex, (_b = __classPrivateFieldGet(this, _OFB_lastPrecipherIndex, "f"), _a = _b++, _b), "f"), _a];
        }
        return ciphertext;
    }
    decrypt(ciphertext) {
        if (ciphertext.length % 16) {
            throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
        }
        return this.encrypt(ciphertext);
    }
}
_OFB_iv = new WeakMap(), _OFB_lastPrecipher = new WeakMap(), _OFB_lastPrecipherIndex = new WeakMap(); //# sourceMappingURL=mode-ofb.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/padding.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pkcs7Pad",
    ()=>pkcs7Pad,
    "pkcs7Strip",
    ()=>pkcs7Strip
]);
function pkcs7Pad(data) {
    const padder = 16 - data.length % 16;
    const result = new Uint8Array(data.length + padder);
    result.set(data);
    for(let i = data.length; i < result.length; i++){
        result[i] = padder;
    }
    return result;
}
function pkcs7Strip(data) {
    if (data.length < 16) {
        throw new TypeError('PKCS#7 invalid length');
    }
    const padder = data[data.length - 1];
    if (padder > 16) {
        throw new TypeError('PKCS#7 padding byte out of range');
    }
    const length = data.length - padder;
    for(let i = 0; i < padder; i++){
        if (data[length + i] !== padder) {
            throw new TypeError('PKCS#7 invalid padding byte');
        }
    }
    return new Uint8Array(data.subarray(0, length));
} //# sourceMappingURL=padding.js.map
}),
"[project]/frontend/node_modules/aes-js/lib.esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$aes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/aes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$cbc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-cbc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$cfb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-cfb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ctr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-ctr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ecb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-ecb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$mode$2d$ofb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/mode-ofb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$aes$2d$js$2f$lib$2e$esm$2f$padding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/aes-js/lib.esm/padding.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/frontend/node_modules/@vanilla-extract/css/functionSerializer/dist/vanilla-extract-css-functionSerializer.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addFunctionSerializer",
    ()=>addFunctionSerializer
]);
function addFunctionSerializer(target, recipe) {
    // TODO: Update to "__function_serializer__" in future.
    // __recipe__ is the backwards compatible name
    Object.defineProperty(target, '__recipe__', {
        value: recipe,
        writable: false
    });
    return target;
}
;
}),
"[project]/frontend/node_modules/@vanilla-extract/css/recipe/dist/vanilla-extract-css-recipe.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addRecipe",
    ()=>addRecipe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$functionSerializer$2f$dist$2f$vanilla$2d$extract$2d$css$2d$functionSerializer$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@vanilla-extract/css/functionSerializer/dist/vanilla-extract-css-functionSerializer.esm.js [app-ssr] (ecmascript)");
;
/**
 * @deprecated Use 'addFunctionSerializer' from '@vanilla-extract/css/functionSerializer'
 */ var addRecipe = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$functionSerializer$2f$dist$2f$vanilla$2d$extract$2d$css$2d$functionSerializer$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addFunctionSerializer"];
;
}),
"[project]/frontend/node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMapValueFn",
    ()=>createMapValueFn,
    "createNormalizeValueFn",
    ()=>createNormalizeValueFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$recipe$2f$dist$2f$vanilla$2d$extract$2d$css$2d$recipe$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@vanilla-extract/css/recipe/dist/vanilla-extract-css-recipe.esm.js [app-ssr] (ecmascript)");
;
function createNormalizeValueFn(properties) {
    var { conditions } = properties;
    if (!conditions) {
        throw new Error('Styles have no conditions');
    }
    function normalizeValue(value) {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            if (!conditions.defaultCondition) {
                throw new Error('No default condition');
            }
            return {
                [conditions.defaultCondition]: value
            };
        }
        if (Array.isArray(value)) {
            if (!('responsiveArray' in conditions)) {
                throw new Error('Responsive arrays are not supported');
            }
            var returnValue = {};
            for(var index in conditions.responsiveArray){
                if (value[index] != null) {
                    returnValue[conditions.responsiveArray[index]] = value[index];
                }
            }
            return returnValue;
        }
        return value;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$recipe$2f$dist$2f$vanilla$2d$extract$2d$css$2d$recipe$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addRecipe"])(normalizeValue, {
        importPath: '@vanilla-extract/sprinkles/createUtils',
        importName: 'createNormalizeValueFn',
        args: [
            {
                conditions: properties.conditions
            }
        ]
    });
}
function createMapValueFn(properties) {
    var { conditions } = properties;
    if (!conditions) {
        throw new Error('Styles have no conditions');
    }
    var normalizeValue = createNormalizeValueFn(properties);
    function mapValue(value, mapFn) {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            if (!conditions.defaultCondition) {
                throw new Error('No default condition');
            }
            return mapFn(value, conditions.defaultCondition);
        }
        var normalizedObject = Array.isArray(value) ? normalizeValue(value) : value;
        var mappedObject = {};
        for(var _key in normalizedObject){
            if (normalizedObject[_key] != null) {
                mappedObject[_key] = mapFn(normalizedObject[_key], _key);
            }
        }
        return mappedObject;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$css$2f$recipe$2f$dist$2f$vanilla$2d$extract$2d$css$2d$recipe$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addRecipe"])(mapValue, {
        importPath: '@vanilla-extract/sprinkles/createUtils',
        importName: 'createMapValueFn',
        args: [
            {
                conditions: properties.conditions
            }
        ]
    });
}
;
}),
"[project]/frontend/node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-74286718.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "c",
    ()=>createSprinkles
]);
function toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
var createSprinkles = (composeStyles)=>function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var sprinklesStyles = Object.assign({}, ...args.map((a)=>a.styles));
        var sprinklesKeys = Object.keys(sprinklesStyles);
        var shorthandNames = sprinklesKeys.filter((property)=>'mappings' in sprinklesStyles[property]);
        var sprinklesFn = (props)=>{
            var classNames = [];
            var shorthands = {};
            var nonShorthands = _objectSpread2({}, props);
            var hasShorthands = false;
            for (var shorthand of shorthandNames){
                var value = props[shorthand];
                if (value != null) {
                    var sprinkle = sprinklesStyles[shorthand];
                    hasShorthands = true;
                    for (var propMapping of sprinkle.mappings){
                        shorthands[propMapping] = value;
                        if (nonShorthands[propMapping] == null) {
                            delete nonShorthands[propMapping];
                        }
                    }
                }
            }
            var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
            var _loop = function _loop() {
                var propValue = finalProps[prop];
                var sprinkle = sprinklesStyles[prop];
                try {
                    if (sprinkle.mappings) {
                        // Skip shorthands
                        return 1; // continue
                    }
                    if (typeof propValue === 'string' || typeof propValue === 'number') {
                        if ("TURBOPACK compile-time truthy", 1) {
                            if (!sprinkle.values[propValue].defaultClass) {
                                throw new Error();
                            }
                        }
                        classNames.push(sprinkle.values[propValue].defaultClass);
                    } else if (Array.isArray(propValue)) {
                        for(var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++){
                            var responsiveValue = propValue[responsiveIndex];
                            if (responsiveValue != null) {
                                var conditionName = sprinkle.responsiveArray[responsiveIndex];
                                if ("TURBOPACK compile-time truthy", 1) {
                                    if (!sprinkle.values[responsiveValue].conditions[conditionName]) {
                                        throw new Error();
                                    }
                                }
                                classNames.push(sprinkle.values[responsiveValue].conditions[conditionName]);
                            }
                        }
                    } else {
                        for(var _conditionName in propValue){
                            // Conditional style
                            var _value = propValue[_conditionName];
                            if (_value != null) {
                                if ("TURBOPACK compile-time truthy", 1) {
                                    if (!sprinkle.values[_value].conditions[_conditionName]) {
                                        throw new Error();
                                    }
                                }
                                classNames.push(sprinkle.values[_value].conditions[_conditionName]);
                            }
                        }
                    }
                } catch (e) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        class SprinklesError extends Error {
                            constructor(message){
                                super(message);
                                this.name = 'SprinklesError';
                            }
                        }
                        var format = (v)=>typeof v === 'string' ? "\"".concat(v, "\"") : v;
                        var invalidPropValue = (prop, value, possibleValues)=>{
                            throw new SprinklesError("\"".concat(prop, "\" has no value ").concat(format(value), ". Possible values are ").concat(Object.keys(possibleValues).map(format).join(', ')));
                        };
                        if (!sprinkle) {
                            throw new SprinklesError("\"".concat(prop, "\" is not a valid sprinkle"));
                        }
                        if (typeof propValue === 'string' || typeof propValue === 'number') {
                            if (!(propValue in sprinkle.values)) {
                                invalidPropValue(prop, propValue, sprinkle.values);
                            }
                            if (!sprinkle.values[propValue].defaultClass) {
                                throw new SprinklesError("\"".concat(prop, "\" has no default condition. You must specify which conditions to target explicitly. Possible options are ").concat(Object.keys(sprinkle.values[propValue].conditions).map(format).join(', ')));
                            }
                        }
                        if (typeof propValue === 'object') {
                            if (!('conditions' in sprinkle.values[Object.keys(sprinkle.values)[0]])) {
                                throw new SprinklesError("\"".concat(prop, "\" is not a conditional property"));
                            }
                            if (Array.isArray(propValue)) {
                                if (!('responsiveArray' in sprinkle)) {
                                    throw new SprinklesError("\"".concat(prop, "\" does not support responsive arrays"));
                                }
                                var breakpointCount = sprinkle.responsiveArray.length;
                                if (breakpointCount < propValue.length) {
                                    throw new SprinklesError("\"".concat(prop, "\" only supports up to ").concat(breakpointCount, " breakpoints. You passed ").concat(propValue.length));
                                }
                                for (var _responsiveValue of propValue){
                                    if (!sprinkle.values[_responsiveValue]) {
                                        invalidPropValue(prop, _responsiveValue, sprinkle.values);
                                    }
                                }
                            } else {
                                for(var _conditionName2 in propValue){
                                    var _value2 = propValue[_conditionName2];
                                    if (_value2 != null) {
                                        if (!sprinkle.values[_value2]) {
                                            invalidPropValue(prop, _value2, sprinkle.values);
                                        }
                                        if (!sprinkle.values[_value2].conditions[_conditionName2]) {
                                            throw new SprinklesError("\"".concat(prop, "\" has no condition named ").concat(format(_conditionName2), ". Possible values are ").concat(Object.keys(sprinkle.values[_value2].conditions).map(format).join(', ')));
                                        }
                                    }
                                }
                            }
                        }
                    }
                    throw e;
                }
            };
            for(var prop in finalProps){
                if (_loop()) continue;
            }
            return composeStyles(classNames.join(' '));
        };
        return Object.assign(sprinklesFn, {
            properties: new Set(sprinklesKeys)
        });
    };
;
}),
"[project]/frontend/node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAtomsFn",
    ()=>createAtomsFn,
    "createSprinkles",
    ()=>createSprinkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$sprinkles$2f$dist$2f$createSprinkles$2d$74286718$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-74286718.esm.js [app-ssr] (ecmascript)");
;
var composeStyles = (classList)=>classList;
var createSprinkles = function createSprinkles() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$sprinkles$2f$dist$2f$createSprinkles$2d$74286718$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(composeStyles)(...arguments);
};
/** @deprecated - Use `createSprinkles` */ var createAtomsFn = createSprinkles;
;
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hydrate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hydrate",
    ()=>Hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/hydrate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Hydrate(parameters) {
    const { children, config, initialState, reconnectOnMount = true } = parameters;
    const { onMount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hydrate"])(config, {
        initialState,
        reconnectOnMount
    });
    // Hydrate for non-SSR
    if (!config._internal.ssr) onMount();
    // Hydrate for SSR
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active.current) return;
        if (!config._internal.ssr) return;
        onMount();
        return ()=>{
            active.current = false;
        };
    }, []);
    return children;
} //# sourceMappingURL=hydrate.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WagmiContext",
    ()=>WagmiContext,
    "WagmiProvider",
    ()=>WagmiProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hydrate.js [app-ssr] (ecmascript)");
'use client';
;
;
const WagmiContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WagmiProvider(parameters) {
    const { children, config } = parameters;
    const props = {
        value: config
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hydrate"], parameters, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(WagmiContext.Provider, props, children));
} //# sourceMappingURL=context.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.19.5'; //# sourceMappingURL=version.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/utils/getVersion.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/version.js [app-ssr] (ecmascript)");
;
const getVersion = ()=>`wagmi@${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`; //# sourceMappingURL=getVersion.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/errors/base.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/utils/getVersion.js [app-ssr] (ecmascript)");
;
;
class BaseError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiError'
        });
    }
    get docsBaseUrl() {
        return 'https://wagmi.sh/react';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVersion"])();
    }
} //# sourceMappingURL=base.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/errors/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WagmiProviderNotFoundError",
    ()=>WagmiProviderNotFoundError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/errors/base.js [app-ssr] (ecmascript)");
;
class WagmiProviderNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('`useConfig` must be used within `WagmiProvider`.', {
            docsPath: '/api/WagmiProvider'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiProviderNotFoundError'
        });
    }
} //# sourceMappingURL=context.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConfig",
    ()=>useConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/errors/context.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useConfig(parameters = {}) {
    // biome-ignore lint/correctness/useHookAtTopLevel: false alarm
    const config = parameters.config ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WagmiContext"]);
    if (!config) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WagmiProviderNotFoundError"]();
    return config;
} //# sourceMappingURL=useConfig.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncExternalStoreWithTracked",
    ()=>useSyncExternalStoreWithTracked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const isPlainObject = (obj)=>typeof obj === 'object' && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepEqual"]) {
    const trackedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(subscribe, getSnapshot, getServerSnapshot, (x)=>x, (a, b)=>{
        if (isPlainObject(a) && isPlainObject(b) && trackedKeys.current.length) {
            for (const key of trackedKeys.current){
                const equal = isEqual(a[key], b[key]);
                if (!equal) return false;
            }
            return true;
        }
        return isEqual(a, b);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (isPlainObject(result)) {
            const trackedResult = {
                ...result
            };
            let properties = {};
            for (const [key, value] of Object.entries(trackedResult)){
                properties = {
                    ...properties,
                    [key]: {
                        configurable: false,
                        enumerable: true,
                        get: ()=>{
                            if (!trackedKeys.current.includes(key)) {
                                trackedKeys.current.push(key);
                            }
                            return value;
                        }
                    }
                };
            }
            Object.defineProperties(trackedResult, properties);
            return trackedResult;
        }
        return result;
    }, [
        result
    ]);
} //# sourceMappingURL=useSyncExternalStoreWithTracked.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccount",
    ()=>useAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useAccount(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithTracked"])((onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchAccount"])(config, {
            onChange
        }), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccount"])(config));
} //# sourceMappingURL=useAccount.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccountEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccountEffect",
    ()=>useAccountEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useAccountEffect(parameters = {}) {
    const { onConnect, onDisconnect } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchAccount"])(config, {
            onChange (data, prevData) {
                if ((prevData.status === 'reconnecting' || prevData.status === 'connecting' && prevData.address === undefined) && data.status === 'connected') {
                    const { address, addresses, chain, chainId, connector } = data;
                    const isReconnected = prevData.status === 'reconnecting' || // if `previousAccount.status` is `undefined`, the connector connected immediately.
                    prevData.status === undefined;
                    onConnect?.({
                        address,
                        addresses,
                        chain,
                        chainId,
                        connector,
                        isReconnected
                    });
                } else if (prevData.status === 'connected' && data.status === 'disconnected') onDisconnect?.();
            }
        });
    }, [
        config,
        onConnect,
        onDisconnect
    ]);
} //# sourceMappingURL=useAccountEffect.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/utils/query.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInfiniteQuery",
    ()=>useInfiniteQuery,
    "useQuery",
    ()=>useQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/utils.js [app-ssr] (ecmascript)");
;
;
;
function useQuery(parameters) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        ...parameters,
        queryKeyHashFn: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashFn"]
    });
    result.queryKey = parameters.queryKey;
    return result;
}
function useInfiniteQuery(parameters) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        ...parameters,
        queryKeyHashFn: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashFn"]
    });
    result.queryKey = parameters.queryKey;
    return result;
} //# sourceMappingURL=query.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChainId",
    ()=>useChainId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useChainId(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchChainId"])(config, {
            onChange
        }), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(config), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(config));
} //# sourceMappingURL=useChainId.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBalance",
    ()=>useBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/getBalance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/utils/query.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useBalance(parameters = {}) {
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBalanceQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useBalance.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useEnsAvatar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEnsAvatar",
    ()=>useEnsAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsAvatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/getEnsAvatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/utils/query.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useEnsAvatar(parameters = {}) {
    const { name, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsAvatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnsAvatarQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(name && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEnsAvatar.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useEnsName.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEnsName",
    ()=>useEnsName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/getEnsName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/utils/query.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useEnsName(parameters = {}) {
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnsNameQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEnsName.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePublicClient",
    ()=>usePublicClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getPublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchPublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function usePublicClient(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])((onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchPublicClient"])(config, {
            onChange
        }), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPublicClient"])(config, parameters), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPublicClient"])(config, parameters), (x)=>x, (a, b)=>a?.uid === b?.uid);
} //# sourceMappingURL=usePublicClient.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnections",
    ()=>useConnections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchConnections.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useConnections(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchConnections"])(config, {
            onChange
        }), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnections"])(config), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnections"])(config));
} //# sourceMappingURL=useConnections.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDisconnect",
    ()=>useDisconnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$disconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/disconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useDisconnect(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$disconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disconnectMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnections"])({
            config
        }).map((connection)=>connection.connector),
        disconnect: mutate,
        disconnectAsync: mutateAsync
    };
} //# sourceMappingURL=useDisconnect.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnectors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectors",
    ()=>useConnectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useConnectors(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchConnectors"])(config, {
            onChange
        }), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectors"])(config), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectors"])(config));
} //# sourceMappingURL=useConnectors.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnect",
    ()=>useConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$connect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/connect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConnectors.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function useConnect(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$connect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    // Reset mutation back to an idle state when the connector disconnects.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return config.subscribe(({ status })=>status, (status, previousStatus)=>{
            if (previousStatus === 'connected' && status === 'disconnected') result.reset();
        });
    }, [
        config,
        result.reset
    ]);
    return {
        ...result,
        connect: mutate,
        connectAsync: mutateAsync,
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnectors"])({
            config
        })
    };
} //# sourceMappingURL=useConnect.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useSignMessage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSignMessage",
    ()=>useSignMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/signMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useSignMessage(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signMessageMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        signMessage: mutate,
        signMessageAsync: mutateAsync
    };
} //# sourceMappingURL=useSignMessage.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChains.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChains",
    ()=>useChains
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/getChains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/watchChains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useChains(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchChains"])(config, {
            onChange
        }), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChains"])(config), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChains"])(config));
} //# sourceMappingURL=useChains.js.map
}),
"[project]/frontend/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSwitchChain",
    ()=>useSwitchChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/query/switchChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useSwitchChain(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["switchChainMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        chains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChains"])({
            config
        }),
        switchChain: mutate,
        switchChainAsync: mutateAsync
    };
} //# sourceMappingURL=useSwitchChain.js.map
}),
"[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/frontend/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), shim = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/frontend/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/frontend/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO: This looks cool. Need to check the performance of `new RegExp` versus defined inline though.
// https://twitter.com/GabrielVergnaud/status/1622906834343366657
__turbopack_context__.s([
    "bytesRegex",
    ()=>bytesRegex,
    "execTyped",
    ()=>execTyped,
    "integerRegex",
    ()=>integerRegex,
    "isTupleRegex",
    ()=>isTupleRegex
]);
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const isTupleRegex = /^\(.+?\).*?$/; //# sourceMappingURL=regex.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAbiParameter",
    ()=>formatAbiParameter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)");
;
// https://regexr.com/7f7rv
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for(let i = 0; i < length; i++){
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1) type += ', ';
        }
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(tupleRegex, abiParameter.type);
        type += `)${result?.array || ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type
        });
    }
    // Add `indexed` to type if in `abiParameter`
    if ('indexed' in abiParameter && abiParameter.indexed) type = `${type} indexed`;
    // Return human-readable ABI parameter
    if (abiParameter.name) return `${type} ${abiParameter.name}`;
    return type;
} //# sourceMappingURL=formatAbiParameter.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAbiParameters",
    ()=>formatAbiParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-ssr] (ecmascript)");
;
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        params += (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameter"])(abiParameter);
        if (i !== length - 1) params += ', ';
    }
    return params;
} //# sourceMappingURL=formatAbiParameters.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAbiItem",
    ()=>formatAbiItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-ssr] (ecmascript)");
;
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function') return `function ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable' ? ` ${abiItem.stateMutability}` : ''}${abiItem.outputs?.length ? ` returns (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.outputs)})` : ''}`;
    if (abiItem.type === 'event') return `event ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'error') return `error ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'constructor') return `constructor(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    if (abiItem.type === 'fallback') return `fallback() external${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    return 'receive() external payable';
} //# sourceMappingURL=formatAbiItem.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eventModifiers",
    ()=>eventModifiers,
    "execConstructorSignature",
    ()=>execConstructorSignature,
    "execErrorSignature",
    ()=>execErrorSignature,
    "execEventSignature",
    ()=>execEventSignature,
    "execFallbackSignature",
    ()=>execFallbackSignature,
    "execFunctionSignature",
    ()=>execFunctionSignature,
    "execStructSignature",
    ()=>execStructSignature,
    "functionModifiers",
    ()=>functionModifiers,
    "isConstructorSignature",
    ()=>isConstructorSignature,
    "isErrorSignature",
    ()=>isErrorSignature,
    "isEventSignature",
    ()=>isEventSignature,
    "isFallbackSignature",
    ()=>isFallbackSignature,
    "isFunctionSignature",
    ()=>isFunctionSignature,
    "isReceiveSignature",
    ()=>isReceiveSignature,
    "isStructSignature",
    ()=>isStructSignature,
    "modifiers",
    ()=>modifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)");
;
// https://regexr.com/7gmok
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(errorSignatureRegex, signature);
}
// https://regexr.com/7gmoq
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(eventSignatureRegex, signature);
}
// https://regexr.com/7gmot
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(functionSignatureRegex, signature);
}
// https://regexr.com/7gmp3
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(structSignatureRegex, signature);
}
// https://regexr.com/78u01
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(constructorSignatureRegex, signature);
}
// https://regexr.com/7srtn
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
function execFallbackSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(fallbackSignatureRegex, signature);
}
// https://regexr.com/78u1k
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
const modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata'
]);
const eventModifiers = new Set([
    'indexed'
]);
const functionModifiers = new Set([
    'calldata',
    'memory',
    'storage'
]); //# sourceMappingURL=signatures.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '1.2.3'; //# sourceMappingURL=version.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/version.js [app-ssr] (ecmascript)");
;
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = args.cause instanceof BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: https://abitype.dev${docsPath}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: abitype@${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
        ].join('\n');
        super(message);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiTypeError'
        });
        if (args.cause) this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
} //# sourceMappingURL=errors.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidAbiItemError",
    ()=>InvalidAbiItemError,
    "UnknownSolidityTypeError",
    ()=>UnknownSolidityTypeError,
    "UnknownTypeError",
    ()=>UnknownTypeError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class InvalidAbiItemError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Failed to parse ABI item.', {
            details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
            docsPath: '/api/human#parseabiitem-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiItemError'
        });
    }
}
class UnknownTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownTypeError'
        });
    }
}
class UnknownSolidityTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSolidityTypeError'
        });
    }
} //# sourceMappingURL=abiItem.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidAbiParameterError",
    ()=>InvalidAbiParameterError,
    "InvalidAbiParametersError",
    ()=>InvalidAbiParametersError,
    "InvalidAbiTypeParameterError",
    ()=>InvalidAbiTypeParameterError,
    "InvalidFunctionModifierError",
    ()=>InvalidFunctionModifierError,
    "InvalidModifierError",
    ()=>InvalidModifierError,
    "InvalidParameterError",
    ()=>InvalidParameterError,
    "SolidityProtectedKeywordError",
    ()=>SolidityProtectedKeywordError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class InvalidAbiParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param }){
        super('Failed to parse ABI parameter.', {
            details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
            docsPath: '/api/human#parseabiparameter-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParameterError'
        });
    }
}
class InvalidAbiParametersError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ params }){
        super('Failed to parse ABI parameters.', {
            details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
            docsPath: '/api/human#parseabiparameters-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParametersError'
        });
    }
}
class InvalidParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param }){
        super('Invalid ABI parameter.', {
            details: param
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParameterError'
        });
    }
}
class SolidityProtectedKeywordError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, name }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SolidityProtectedKeywordError'
        });
    }
}
class InvalidModifierError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidModifierError'
        });
    }
}
class InvalidFunctionModifierError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidFunctionModifierError'
        });
    }
}
class InvalidAbiTypeParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abiParameter }){
        super('Invalid ABI parameter.', {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: [
                'ABI parameter type is invalid.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiTypeParameterError'
        });
    }
} //# sourceMappingURL=abiParameter.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidSignatureError",
    ()=>InvalidSignatureError,
    "InvalidStructSignatureError",
    ()=>InvalidStructSignatureError,
    "UnknownSignatureError",
    ()=>UnknownSignatureError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class InvalidSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature, type }){
        super(`Invalid ${type} signature.`, {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSignatureError'
        });
    }
}
class UnknownSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Unknown signature.', {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSignatureError'
        });
    }
}
class InvalidStructSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Invalid struct signature.', {
            details: signature,
            metaMessages: [
                'No properties exist.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStructSignatureError'
        });
    }
} //# sourceMappingURL=signature.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/struct.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircularReferenceError",
    ()=>CircularReferenceError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class CircularReferenceError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Circular reference detected.', {
            metaMessages: [
                `Struct "${type}" is a circular reference.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
} //# sourceMappingURL=struct.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/splitParameters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidParenthesisError",
    ()=>InvalidParenthesisError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class InvalidParenthesisError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ current, depth }){
        super('Unbalanced parentheses.', {
            metaMessages: [
                `"${current.trim()}" has too many ${depth > 0 ? 'opening' : 'closing'} parentheses.`
            ],
            details: `Depth "${depth}"`
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParenthesisError'
        });
    }
} //# sourceMappingURL=splitParameters.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/cache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets {@link parameterCache} cache key namespaced by {@link type} and {@link structs}. This prevents parameters from being accessible to types that don't allow them (e.g. `string indexed foo` not allowed outside of `type: 'event'`) and ensures different struct definitions with the same name are cached separately.
 * @param param ABI parameter string
 * @param type ABI parameter type
 * @param structs Struct definitions to include in cache key
 * @returns Cache key for {@link parameterCache}
 */ __turbopack_context__.s([
    "getParameterCacheKey",
    ()=>getParameterCacheKey,
    "parameterCache",
    ()=>parameterCache
]);
function getParameterCacheKey(param, type, structs) {
    let structKey = '';
    if (structs) for (const struct of Object.entries(structs)){
        if (!struct) continue;
        let propertyKey = '';
        for (const property of struct[1]){
            propertyKey += `[${property.type}${property.name ? `:${property.name}` : ''}]`;
        }
        structKey += `(${struct[0]}{${propertyKey}})`;
    }
    if (type) return `${type}:${param}${structKey}`;
    return `${param}${structKey}`;
}
const parameterCache = new Map([
    // Unnamed
    [
        'address',
        {
            type: 'address'
        }
    ],
    [
        'bool',
        {
            type: 'bool'
        }
    ],
    [
        'bytes',
        {
            type: 'bytes'
        }
    ],
    [
        'bytes32',
        {
            type: 'bytes32'
        }
    ],
    [
        'int',
        {
            type: 'int256'
        }
    ],
    [
        'int256',
        {
            type: 'int256'
        }
    ],
    [
        'string',
        {
            type: 'string'
        }
    ],
    [
        'uint',
        {
            type: 'uint256'
        }
    ],
    [
        'uint8',
        {
            type: 'uint8'
        }
    ],
    [
        'uint16',
        {
            type: 'uint16'
        }
    ],
    [
        'uint24',
        {
            type: 'uint24'
        }
    ],
    [
        'uint32',
        {
            type: 'uint32'
        }
    ],
    [
        'uint64',
        {
            type: 'uint64'
        }
    ],
    [
        'uint96',
        {
            type: 'uint96'
        }
    ],
    [
        'uint112',
        {
            type: 'uint112'
        }
    ],
    [
        'uint160',
        {
            type: 'uint160'
        }
    ],
    [
        'uint192',
        {
            type: 'uint192'
        }
    ],
    [
        'uint256',
        {
            type: 'uint256'
        }
    ],
    // Named
    [
        'address owner',
        {
            type: 'address',
            name: 'owner'
        }
    ],
    [
        'address to',
        {
            type: 'address',
            name: 'to'
        }
    ],
    [
        'bool approved',
        {
            type: 'bool',
            name: 'approved'
        }
    ],
    [
        'bytes _data',
        {
            type: 'bytes',
            name: '_data'
        }
    ],
    [
        'bytes data',
        {
            type: 'bytes',
            name: 'data'
        }
    ],
    [
        'bytes signature',
        {
            type: 'bytes',
            name: 'signature'
        }
    ],
    [
        'bytes32 hash',
        {
            type: 'bytes32',
            name: 'hash'
        }
    ],
    [
        'bytes32 r',
        {
            type: 'bytes32',
            name: 'r'
        }
    ],
    [
        'bytes32 root',
        {
            type: 'bytes32',
            name: 'root'
        }
    ],
    [
        'bytes32 s',
        {
            type: 'bytes32',
            name: 's'
        }
    ],
    [
        'string name',
        {
            type: 'string',
            name: 'name'
        }
    ],
    [
        'string symbol',
        {
            type: 'string',
            name: 'symbol'
        }
    ],
    [
        'string tokenURI',
        {
            type: 'string',
            name: 'tokenURI'
        }
    ],
    [
        'uint tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint8 v',
        {
            type: 'uint8',
            name: 'v'
        }
    ],
    [
        'uint256 balance',
        {
            type: 'uint256',
            name: 'balance'
        }
    ],
    [
        'uint256 tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint256 value',
        {
            type: 'uint256',
            name: 'value'
        }
    ],
    // Indexed
    [
        'event:address indexed from',
        {
            type: 'address',
            name: 'from',
            indexed: true
        }
    ],
    [
        'event:address indexed to',
        {
            type: 'address',
            name: 'to',
            indexed: true
        }
    ],
    [
        'event:uint indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ],
    [
        'event:uint256 indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ]
]); //# sourceMappingURL=cache.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSolidityKeyword",
    ()=>isSolidityKeyword,
    "isSolidityType",
    ()=>isSolidityType,
    "isValidDataLocation",
    ()=>isValidDataLocation,
    "parseAbiParameter",
    ()=>parseAbiParameter,
    "parseConstructorSignature",
    ()=>parseConstructorSignature,
    "parseErrorSignature",
    ()=>parseErrorSignature,
    "parseEventSignature",
    ()=>parseEventSignature,
    "parseFallbackSignature",
    ()=>parseFallbackSignature,
    "parseFunctionSignature",
    ()=>parseFunctionSignature,
    "parseSignature",
    ()=>parseSignature,
    "splitParameters",
    ()=>splitParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$splitParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/splitParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function parseSignature(signature, structs = {}) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunctionSignature"])(signature)) return parseFunctionSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEventSignature"])(signature)) return parseEventSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isErrorSignature"])(signature)) return parseErrorSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isConstructorSignature"])(signature)) return parseConstructorSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFallbackSignature"])(signature)) return parseFallbackSignature(signature);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReceiveSignature"])(signature)) return {
        type: 'receive',
        stateMutability: 'payable'
    };
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownSignatureError"]({
        signature
    });
}
function parseFunctionSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execFunctionSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'function'
    });
    const inputParams = splitParameters(match.parameters);
    const inputs = [];
    const inputLength = inputParams.length;
    for(let i = 0; i < inputLength; i++){
        inputs.push(parseAbiParameter(inputParams[i], {
            modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionModifiers"],
            structs,
            type: 'function'
        }));
    }
    const outputs = [];
    if (match.returns) {
        const outputParams = splitParameters(match.returns);
        const outputLength = outputParams.length;
        for(let i = 0; i < outputLength; i++){
            outputs.push(parseAbiParameter(outputParams[i], {
                modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionModifiers"],
                structs,
                type: 'function'
            }));
        }
    }
    return {
        name: match.name,
        type: 'function',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs,
        outputs
    };
}
function parseEventSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execEventSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'event'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventModifiers"],
        structs,
        type: 'event'
    }));
    return {
        name: match.name,
        type: 'event',
        inputs: abiParameters
    };
}
function parseErrorSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execErrorSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'error'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'error'
    }));
    return {
        name: match.name,
        type: 'error',
        inputs: abiParameters
    };
}
function parseConstructorSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execConstructorSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'constructor'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'constructor'
    }));
    return {
        type: 'constructor',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs: abiParameters
    };
}
function parseFallbackSignature(signature) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execFallbackSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'fallback'
    });
    return {
        type: 'fallback',
        stateMutability: match.stateMutability ?? 'nonpayable'
    };
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    // optional namespace cache by `type`
    const parameterCacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParameterCacheKey"])(param, options?.type, options?.structs);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parameterCache"].has(parameterCacheKey)) return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parameterCache"].get(parameterCacheKey);
    const isTuple = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTupleRegex"].test(param);
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidParameterError"]({
        param
    });
    if (match.name && isSolidityKeyword(match.name)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolidityProtectedKeywordError"]({
        param,
        name: match.name
    });
    const name = match.name ? {
        name: match.name
    } : {};
    const indexed = match.modifier === 'indexed' ? {
        indexed: true
    } : {};
    const structs = options?.structs ?? {};
    let type;
    let components = {};
    if (isTuple) {
        type = 'tuple';
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for(let i = 0; i < length; i++){
            // remove `modifiers` from `options` to prevent from being added to tuple components
            components_.push(parseAbiParameter(params[i], {
                structs
            }));
        }
        components = {
            components: components_
        };
    } else if (match.type in structs) {
        type = 'tuple';
        components = {
            components: structs[match.type]
        };
    } else if (dynamicIntegerRegex.test(match.type)) {
        type = `${match.type}256`;
    } else if (match.type === 'address payable') {
        type = 'address';
    } else {
        type = match.type;
        if (!(options?.type === 'struct') && !isSolidityType(type)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownSolidityTypeError"]({
            type
        });
    }
    if (match.modifier) {
        // Check if modifier exists, but is not allowed (e.g. `indexed` in `functionModifiers`)
        if (!options?.modifiers?.has?.(match.modifier)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidModifierError"]({
            param,
            type: options?.type,
            modifier: match.modifier
        });
        // Check if resolved `type` is valid if there is a function modifier
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionModifiers"].has(match.modifier) && !isValidDataLocation(type, !!match.array)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidFunctionModifierError"]({
            param,
            type: options?.type,
            modifier: match.modifier
        });
    }
    const abiParameter = {
        type: `${type}${match.array ?? ''}`,
        ...name,
        ...indexed,
        ...components
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parameterCache"].set(parameterCacheKey, abiParameter);
    return abiParameter;
}
function splitParameters(params, result = [], current = '', depth = 0) {
    const length = params.trim().length;
    // biome-ignore lint/correctness/noUnreachable: recursive
    for(let i = 0; i < length; i++){
        const char = params[i];
        const tail = params.slice(i + 1);
        switch(char){
            case ',':
                return depth === 0 ? splitParameters(tail, [
                    ...result,
                    current.trim()
                ]) : splitParameters(tail, result, `${current}${char}`, depth);
            case '(':
                return splitParameters(tail, result, `${current}${char}`, depth + 1);
            case ')':
                return splitParameters(tail, result, `${current}${char}`, depth - 1);
            default:
                return splitParameters(tail, result, `${current}${char}`, depth);
        }
    }
    if (current === '') return result;
    if (depth !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$splitParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidParenthesisError"]({
        current,
        depth
    });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return type === 'address' || type === 'bool' || type === 'function' || type === 'string' || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesRegex"].test(type) || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"].test(type);
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name) {
    return name === 'address' || name === 'bool' || name === 'function' || name === 'string' || name === 'tuple' || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesRegex"].test(name) || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"].test(name) || protectedKeywordsRegex.test(name);
}
function isValidDataLocation(type, isArray) {
    return isArray || type === 'bytes' || type === 'string' || type === 'tuple';
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseStructs",
    ()=>parseStructs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$struct$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/struct.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function parseStructs(signatures) {
    // Create "shallow" version of each struct (and filter out non-structs or invalid structs)
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for(let i = 0; i < signaturesLength; i++){
        const signature = signatures[i];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
        const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execStructSignature"])(signature);
        if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
            signature,
            type: 'struct'
        });
        const properties = match.properties.split(';');
        const components = [];
        const propertiesLength = properties.length;
        for(let k = 0; k < propertiesLength; k++){
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed) continue;
            const abiParameter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameter"])(trimmed, {
                type: 'struct'
            });
            components.push(abiParameter);
        }
        if (!components.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidStructSignatureError"]({
            signature
        });
        shallowStructs[match.name] = components;
    }
    // Resolve nested structs inside each parameter
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for(let i = 0; i < entriesLength; i++){
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters = [], structs = {}, ancestors = new Set()) {
    const components = [];
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        const isTuple = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTupleRegex"].test(abiParameter.type);
        if (isTuple) components.push(abiParameter);
        else {
            const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(typeWithoutTupleRegex, abiParameter.type);
            if (!match?.type) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAbiTypeParameterError"]({
                abiParameter
            });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$struct$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircularReferenceError"]({
                    type
                });
                components.push({
                    ...abiParameter,
                    type: `tuple${array ?? ''}`,
                    components: resolveStructs(structs[type], structs, new Set([
                        ...ancestors,
                        type
                    ]))
                });
            } else {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolidityType"])(type)) components.push(abiParameter);
                else throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownTypeError"]({
                    type
                });
            }
        }
    }
    return components;
} //# sourceMappingURL=structs.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAbi",
    ()=>parseAbi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)");
;
;
;
function parseAbi(signatures) {
    const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStructs"])(signatures);
    const abi = [];
    const length = signatures.length;
    for(let i = 0; i < length; i++){
        const signature = signatures[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
        abi.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSignature"])(signature, structs));
    }
    return abi;
} //# sourceMappingURL=parseAbi.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/parseAbiItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAbiItem",
    ()=>parseAbiItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string') abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSignature"])(signature);
    else {
        const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStructs"])(signature);
        const length = signature.length;
        for(let i = 0; i < length; i++){
            const signature_ = signature[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStructSignature"])(signature_)) continue;
            abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSignature"])(signature_, structs);
            break;
        }
    }
    if (!abiItem) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAbiItemError"]({
        signature
    });
    return abiItem;
} //# sourceMappingURL=parseAbiItem.js.map
}),
"[project]/frontend/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAbiParameters",
    ()=>parseAbiParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
function parseAbiParameters(params) {
    const abiParameters = [];
    if (typeof params === 'string') {
        const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitParameters"])(params);
        const length = parameters.length;
        for(let i = 0; i < length; i++){
            abiParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameter"])(parameters[i], {
                modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modifiers"]
            }));
        }
    } else {
        const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStructs"])(params);
        const length = params.length;
        for(let i = 0; i < length; i++){
            const signature = params[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
            const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitParameters"])(signature);
            const length = parameters.length;
            for(let k = 0; k < length; k++){
                abiParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameter"])(parameters[k], {
                    modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modifiers"],
                    structs
                }));
            }
        }
    }
    if (abiParameters.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAbiParametersError"]({
        params
    });
    return abiParameters;
} //# sourceMappingURL=parseAbiParameters.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        client.mount();
        return ()=>{
            client.unmount();
        };
    }, [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>createValue());
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary)=>{
    if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        errorResetBoundary.clearReset();
    }, [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/suspense.ts
__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Observer(client, defaultedOptions));
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>{
        const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        observer.updateResult();
        return unsubscribe;
    }, [
        observer,
        shouldSubscribe
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(defaultedOptions);
    }, [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query: client.getQueryCache().get(defaultedOptions.queryHash),
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInfiniteQuery",
    ()=>useInfiniteQuery
]);
// src/useInfiniteQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)");
"use client";
;
;
function useInfiniteQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfiniteQueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useInfiniteQuery.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
// src/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MutationObserver"](client, options));
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(options);
    }, [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)), [
        observer
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((variables, mutateOptions)=>{
        observer.mutate(variables, mutateOptions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }, [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) {
        throw result.error;
    }
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}),
"[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return zeroGap;
    }
    //TURBOPACK unreachable
    ;
    var offsets;
    var documentWidth;
    var windowWidth;
};
}),
"[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function() {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            } else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
    }, [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/frontend/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/frontend/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return {
            // value
            value: initialValue,
            // last callback
            callback: callback,
            // "memoized" public interface
            facade: {
                get current () {
                    return ref.value;
                },
                set current (value){
                    var last = ref.value;
                    if (last !== value) {
                        ref.value = value;
                        ref.callback(value, last);
                    }
                }
            }
        };
    })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/frontend/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
        });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function() {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function(ref) {
                if (!nextRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                }
            });
            nextRefs_1.forEach(function(ref) {
                if (!prevRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/frontend/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/frontend/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    var options;
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        if (target instanceof ShadowRoot) {
            target = target.host;
        } else {
            target = target.parentNode;
        }
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lastProps.current = props;
    }, [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                props.lockRef.current
            ], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function(el) {
                return el.classList.add("allow-interactivity-".concat(id));
            });
            return function() {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function(el) {
                    return el.classList.remove("allow-interactivity-".concat(id));
                });
            };
        }
        return;
    }, [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event, parent) {
        if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        } else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
            return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
                return node.contains(event.target);
            });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(name, delta, target, should) {
        var event = {
            name: name,
            delta: delta,
            target: target,
            should: should,
            shadowParent: getOutermostShadowParent(target)
        };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
                return e !== event;
            });
        }, 1);
    }, []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        return function() {
            lockStack = lockStack.filter(function(inst) {
                return inst !== Style;
            });
            document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/frontend/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/frontend/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
            sheet.add(styles);
            return function() {
                sheet.remove();
            };
        }, [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/frontend/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/frontend/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>get,
    "getVarName",
    ()=>getVarName,
    "walkObject",
    ()=>walkObject
]);
function getVarName(variable) {
    var matches = variable.match(/^var\((.*)\)$/);
    if (matches) {
        return matches[1];
    }
    return variable;
}
function get(obj, path) {
    var result = obj;
    for (var key of path){
        if (!(key in result)) {
            throw new Error("Path ".concat(path.join(' -> '), " does not exist in object"));
        }
        result = result[key];
    }
    return result;
}
function walkObject(obj, fn) {
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var clone = {};
    for(var key in obj){
        var _value = obj[key];
        var currentPath = [
            ...path,
            key
        ];
        if (typeof _value === 'string' || typeof _value === 'number' || _value == null) {
            clone[key] = fn(_value, currentPath);
        } else if (typeof _value === 'object' && !Array.isArray(_value)) {
            clone[key] = walkObject(_value, fn, currentPath);
        } else {
            console.warn("Skipping invalid key \"".concat(currentPath.join('.'), "\". Should be a string, number, null or object. Received: \"").concat(Array.isArray(_value) ? 'Array' : typeof _value, "\""));
        }
    }
    return clone;
}
;
}),
"[project]/frontend/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignInlineVars",
    ()=>assignInlineVars,
    "setElementVars",
    ()=>setElementVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js [app-ssr] (ecmascript)");
;
function assignInlineVars(varsOrContract, tokens) {
    var styles = {};
    if (typeof tokens === 'object') {
        var _contract = varsOrContract;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walkObject"])(tokens, (value, path)=>{
            if (value == null) {
                return;
            }
            var varName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(_contract, path);
            styles[(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVarName"])(varName)] = String(value);
        });
    } else {
        var _vars = varsOrContract;
        for(var varName in _vars){
            var value = _vars[varName];
            if (value == null) {
                continue;
            }
            styles[(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVarName"])(varName)] = value;
        }
    }
    Object.defineProperty(styles, 'toString', {
        value: function value() {
            return Object.keys(this).map((key)=>"".concat(key, ":").concat(this[key])).join(';');
        },
        writable: false
    });
    return styles;
}
function setVar(element, variable, value) {
    element.style.setProperty((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVarName"])(variable), value);
}
function setElementVars(element, varsOrContract, tokens) {
    if (typeof tokens === 'object') {
        var _contract = varsOrContract;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walkObject"])(tokens, (value, path)=>{
            if (value == null) {
                return;
            }
            setVar(element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$vanilla$2d$extract$2f$private$2f$dist$2f$vanilla$2d$extract$2d$private$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(_contract, path), String(value));
        });
    } else {
        var _vars = varsOrContract;
        for(var varName in _vars){
            var value = _vars[varName];
            if (value == null) {
                continue;
            }
            setVar(element, varName, _vars[varName]);
        }
    }
}
;
}),
"[project]/frontend/node_modules/ua-parser-js/src/ua-parser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.41
   Copyright © 2012-2025 Faisal Salman <f@faisalman.com>
   MIT License */ /*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */ /////////////////////////////////////////////////////////////////////////////////
(function(window, undefined) {
    'use strict';
    //////////////
    // Constants
    /////////////
    var LIBVERSION = '1.0.41', EMPTY = '', UNKNOWN = '?', FUNC_TYPE = 'function', UNDEF_TYPE = 'undefined', OBJ_TYPE = 'object', STR_TYPE = 'string', MAJOR = 'major', MODEL = 'model', NAME = 'name', TYPE = 'type', VENDOR = 'vendor', VERSION = 'version', ARCHITECTURE = 'architecture', CONSOLE = 'console', MOBILE = 'mobile', TABLET = 'tablet', SMARTTV = 'smarttv', WEARABLE = 'wearable', EMBEDDED = 'embedded', UA_MAX_LENGTH = 500;
    var AMAZON = 'Amazon', APPLE = 'Apple', ASUS = 'ASUS', BLACKBERRY = 'BlackBerry', BROWSER = 'Browser', CHROME = 'Chrome', EDGE = 'Edge', FIREFOX = 'Firefox', GOOGLE = 'Google', HONOR = 'Honor', HUAWEI = 'Huawei', LENOVO = 'Lenovo', LG = 'LG', MICROSOFT = 'Microsoft', MOTOROLA = 'Motorola', NVIDIA = 'Nvidia', ONEPLUS = 'OnePlus', OPERA = 'Opera', OPPO = 'OPPO', SAMSUNG = 'Samsung', SHARP = 'Sharp', SONY = 'Sony', XIAOMI = 'Xiaomi', ZEBRA = 'Zebra', FACEBOOK = 'Facebook', CHROMIUM_OS = 'Chromium OS', MAC_OS = 'Mac OS', SUFFIX_BROWSER = ' Browser';
    ///////////
    // Helper
    //////////
    var extend = function(regexes, extensions) {
        var mergedRegexes = {};
        for(var i in regexes){
            if (extensions[i] && extensions[i].length % 2 === 0) {
                mergedRegexes[i] = extensions[i].concat(regexes[i]);
            } else {
                mergedRegexes[i] = regexes[i];
            }
        }
        return mergedRegexes;
    }, enumerize = function(arr) {
        var enums = {};
        for(var i = 0; i < arr.length; i++){
            enums[arr[i].toUpperCase()] = arr[i];
        }
        return enums;
    }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
        return str.toLowerCase();
    }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
    }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
    };
    ///////////////
    // Map helper
    //////////////
    var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        // loop through all regexes maps
        while(i < arrays.length && !matches){
            var regex = arrays[i], props = arrays[i + 1]; // odd sequence (1,3,5,..)
            j = k = 0;
            // try matching uastring with regexes
            while(j < regex.length && !matches){
                if (!regex[j]) {
                    break;
                }
                matches = regex[j++].exec(ua);
                if (!!matches) {
                    for(p = 0; p < props.length; p++){
                        match = matches[++k];
                        q = props[p];
                        // check if given property is actually array
                        if (typeof q === OBJ_TYPE && q.length > 0) {
                            if (q.length === 2) {
                                if (typeof q[1] == FUNC_TYPE) {
                                    // assign modified match
                                    this[q[0]] = q[1].call(this, match);
                                } else {
                                    // assign given value, ignore regex match
                                    this[q[0]] = q[1];
                                }
                            } else if (q.length === 3) {
                                // check whether function or regex
                                if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                    // call function (usually string mapper)
                                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                } else {
                                    // sanitize match using given regex
                                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                }
                            } else if (q.length === 4) {
                                this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                            }
                        } else {
                            this[q] = match ? match : undefined;
                        }
                    }
                }
            }
            i += 2;
        }
    }, strMapper = function(str, map) {
        for(var i in map){
            // check if current value is array
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                for(var j = 0; j < map[i].length; j++){
                    if (has(map[i][j], str)) {
                        return i === UNKNOWN ? undefined : i;
                    }
                }
            } else if (has(map[i], str)) {
                return i === UNKNOWN ? undefined : i;
            }
        }
        return map.hasOwnProperty('*') ? map['*'] : str;
    };
    ///////////////
    // String map
    //////////////
    // Safari < 3.0
    var oldSafariMap = {
        '1.0': '/8',
        '1.2': '/1',
        '1.3': '/3',
        '2.0': '/412',
        '2.0.2': '/416',
        '2.0.3': '/417',
        '2.0.4': '/419',
        '?': '/'
    }, windowsVersionMap = {
        'ME': '4.90',
        'NT 3.11': 'NT3.51',
        'NT 4.0': 'NT4.0',
        '2000': 'NT 5.0',
        'XP': [
            'NT 5.1',
            'NT 5.2'
        ],
        'Vista': 'NT 6.0',
        '7': 'NT 6.1',
        '8': 'NT 6.2',
        '8.1': 'NT 6.3',
        '10': [
            'NT 6.4',
            'NT 10.0'
        ],
        'RT': 'ARM'
    };
    //////////////
    // Regex map
    /////////////
    var regexes = {
        browser: [
            [
                /\b(?:crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    'Chrome'
                ]
            ],
            [
                /edg(?:e|ios|a)?\/([\w\.]+)/i // Microsoft Edge
            ],
            [
                VERSION,
                [
                    NAME,
                    'Edge'
                ]
            ],
            [
                // Presto based
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i // Opera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /opios[\/ ]+([\w\.]+)/i // Opera mini on iphone >= 8.0
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + ' Mini'
                ]
            ],
            [
                /\bop(?:rg)?x\/([\w\.]+)/i // Opera GX
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + ' GX'
                ]
            ],
            [
                /\bopr\/([\w\.]+)/i // Opera Webkit
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA
                ]
            ],
            [
                // Mixed
                /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i // Baidu
            ],
            [
                VERSION,
                [
                    NAME,
                    'Baidu'
                ]
            ],
            [
                /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i // Maxthon
            ],
            [
                VERSION,
                [
                    NAME,
                    'Maxthon'
                ]
            ],
            [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
                // Trident based
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i // Weibo
            ],
            [
                NAME,
                VERSION
            ],
            [
                /quark(?:pc)?\/([-\w\.]+)/i // Quark
            ],
            [
                VERSION,
                [
                    NAME,
                    'Quark'
                ]
            ],
            [
                /\bddg\/([\w\.]+)/i // DuckDuckGo
            ],
            [
                VERSION,
                [
                    NAME,
                    'DuckDuckGo'
                ]
            ],
            [
                /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i // UCBrowser
            ],
            [
                VERSION,
                [
                    NAME,
                    'UC' + BROWSER
                ]
            ],
            [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i // WeChat
            ],
            [
                VERSION,
                [
                    NAME,
                    'WeChat'
                ]
            ],
            [
                /konqueror\/([\w\.]+)/i // Konqueror
            ],
            [
                VERSION,
                [
                    NAME,
                    'Konqueror'
                ]
            ],
            [
                /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i // IE11
            ],
            [
                VERSION,
                [
                    NAME,
                    'IE'
                ]
            ],
            [
                /ya(?:search)?browser\/([\w\.]+)/i // Yandex
            ],
            [
                VERSION,
                [
                    NAME,
                    'Yandex'
                ]
            ],
            [
                /slbrowser\/([\w\.]+)/i // Smart Lenovo Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    'Smart Lenovo ' + BROWSER
                ]
            ],
            [
                /(avast|avg)\/([\w\.]+)/i // Avast/AVG Secure Browser
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    '$1 Secure ' + BROWSER
                ],
                VERSION
            ],
            [
                /\bfocus\/([\w\.]+)/i // Firefox Focus
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + ' Focus'
                ]
            ],
            [
                /\bopt\/([\w\.]+)/i // Opera Touch
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + ' Touch'
                ]
            ],
            [
                /coc_coc\w+\/([\w\.]+)/i // Coc Coc Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    'Coc Coc'
                ]
            ],
            [
                /dolfin\/([\w\.]+)/i // Dolphin
            ],
            [
                VERSION,
                [
                    NAME,
                    'Dolphin'
                ]
            ],
            [
                /coast\/([\w\.]+)/i // Opera Coast
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + ' Coast'
                ]
            ],
            [
                /miuibrowser\/([\w\.]+)/i // MIUI Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    'MIUI' + SUFFIX_BROWSER
                ]
            ],
            [
                /fxios\/([\w\.-]+)/i // Firefox for iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX
                ]
            ],
            [
                /\bqihoobrowser\/?([\w\.]*)/i // 360
            ],
            [
                VERSION,
                [
                    NAME,
                    '360'
                ]
            ],
            [
                /\b(qq)\/([\w\.]+)/i // QQ
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    '$1Browser'
                ],
                VERSION
            ],
            [
                /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    '$1' + SUFFIX_BROWSER
                ],
                VERSION
            ],
            [
                /samsungbrowser\/([\w\.]+)/i // Samsung Internet
            ],
            [
                VERSION,
                [
                    NAME,
                    SAMSUNG + ' Internet'
                ]
            ],
            [
                /metasr[\/ ]?([\d\.]+)/i // Sogou Explorer
            ],
            [
                VERSION,
                [
                    NAME,
                    'Sogou Explorer'
                ]
            ],
            [
                /(sogou)mo\w+\/([\d\.]+)/i // Sogou Mobile
            ],
            [
                [
                    NAME,
                    'Sogou Mobile'
                ],
                VERSION
            ],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i // QQ/2345
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(lbbrowser|rekonq)/i,
                /\[(linkedin)app\]/i // LinkedIn App for iOS & Android
            ],
            [
                NAME
            ],
            [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i // 360
            ],
            [
                VERSION,
                NAME
            ],
            [
                // WebView
                /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i // Facebook App for iOS & Android
            ],
            [
                [
                    NAME,
                    FACEBOOK
                ],
                VERSION
            ],
            [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /(daum)apps[\/ ]([\w\.]+)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i // Chromium/Instagram/Snapchat
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\bgsa\/([\w\.]+) .*safari\//i // Google Search Appliance on iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    'GSA'
                ]
            ],
            [
                /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i // TikTok
            ],
            [
                VERSION,
                [
                    NAME,
                    'TikTok'
                ]
            ],
            [
                /headlesschrome(?:\/([\w\.]+)| )/i // Chrome Headless
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + ' Headless'
                ]
            ],
            [
                / wv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
            ],
            [
                [
                    NAME,
                    CHROME + ' WebView'
                ],
                VERSION
            ],
            [
                /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i // Android Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    'Android ' + BROWSER
                ]
            ],
            [
                /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
            ],
            [
                NAME,
                VERSION
            ],
            [
                /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i // Mobile Safari
            ],
            [
                VERSION,
                [
                    NAME,
                    'Mobile Safari'
                ]
            ],
            [
                /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i // Safari & Safari Mobile
            ],
            [
                VERSION,
                NAME
            ],
            [
                /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    oldSafariMap
                ]
            ],
            [
                /(webkit|khtml)\/([\w\.]+)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                // Gecko based
                /(navigator|netscape\d?)\/([-\w\.]+)/i // Netscape
            ],
            [
                [
                    NAME,
                    'Netscape'
                ],
                VERSION
            ],
            [
                /(wolvic|librewolf)\/([\w\.]+)/i // Wolvic/LibreWolf
            ],
            [
                NAME,
                VERSION
            ],
            [
                /mobile vr; rv:([\w\.]+)\).+firefox/i // Firefox Reality
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + ' Reality'
                ]
            ],
            [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                // Other
                /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
                /\b(links) \(([\w\.]+)/i // Links
            ],
            [
                NAME,
                [
                    VERSION,
                    /_/g,
                    '.'
                ]
            ],
            [
                /(cobalt)\/([\w\.]+)/i // Cobalt
            ],
            [
                NAME,
                [
                    VERSION,
                    /master.|lts./,
                    ""
                ]
            ]
        ],
        cpu: [
            [
                /\b((amd|x|x86[-_]?|wow|win)64)\b/i // AMD64 (x64)
            ],
            [
                [
                    ARCHITECTURE,
                    'amd64'
                ]
            ],
            [
                /(ia32(?=;))/i,
                /\b((i[346]|x)86)(pc)?\b/i // IA32 (x86)
            ],
            [
                [
                    ARCHITECTURE,
                    'ia32'
                ]
            ],
            [
                /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i // ARM64
            ],
            [
                [
                    ARCHITECTURE,
                    'arm64'
                ]
            ],
            [
                /\b(arm(v[67])?ht?n?[fl]p?)\b/i // ARMHF
            ],
            [
                [
                    ARCHITECTURE,
                    'armhf'
                ]
            ],
            [
                // PocketPC mistakenly identified as PowerPC
                /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
            ],
            [
                [
                    ARCHITECTURE,
                    'arm'
                ]
            ],
            [
                /((ppc|powerpc)(64)?)( mac|;|\))/i // PowerPC
            ],
            [
                [
                    ARCHITECTURE,
                    /ower/,
                    EMPTY,
                    lowerize
                ]
            ],
            [
                / sun4\w[;\)]/i // SPARC
            ],
            [
                [
                    ARCHITECTURE,
                    'sparc'
                ]
            ],
            [
                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ]
        ],
        device: [
            [
                //////////////////////////
                // MOBILES & TABLETS
                /////////////////////////
                // Samsung
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Apple
                /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i // iPod/iPhone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(macintosh);/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ]
            ],
            [
                // Sharp
                /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Honor
                /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HONOR
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /honor([-\w ]+)[;\)]/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HONOR
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Huawei
                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Xiaomi
                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i // Mi Pad tablets
            ],
            [
                [
                    MODEL,
                    /_/g,
                    ' '
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
                / ([\w ]+) miui\/v?\d/i
            ],
            [
                [
                    MODEL,
                    /_/g,
                    ' '
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // OPPO
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    OPPO
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(opd2(\d{3}a?))(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    strMapper,
                    {
                        'OnePlus': [
                            '304',
                            '403',
                            '203'
                        ],
                        '*': OPPO
                    }
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Vivo
                /vivo (\w+)(?: bui|\))/i,
                /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Vivo'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Realme
                /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Realme'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Motorola
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // LG
                /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
                /\blg-?([\d\w]+) bui/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Lenovo
                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LENOVO
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Nokia
                /(nokia) (t[12][01])/i
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
                /nokia[-_ ]?(([-\w\. ]*))/i
            ],
            [
                [
                    MODEL,
                    /_/g,
                    ' '
                ],
                [
                    TYPE,
                    MOBILE
                ],
                [
                    VENDOR,
                    'Nokia'
                ]
            ],
            [
                // Google
                /(pixel (c|tablet))\b/i // Google Pixel C/Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i // Google Pixel
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Sony
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /sony tablet [ps]/i,
                /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [
                [
                    MODEL,
                    'Xperia Tablet'
                ],
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OnePlus
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ONEPLUS
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Amazon
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i // Kindle Fire HD
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i // Fire Phone
            ],
            [
                [
                    MODEL,
                    /(.+)/g,
                    'Fire Phone $1'
                ],
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // BlackBerry
                /(playbook);[-\w\),; ]+(rim)/i // BlackBerry PlayBook
            ],
            [
                MODEL,
                VENDOR,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:bb[a-f]|st[hv])100-\d)/i,
                /\(bb10; (\w+)/i // BlackBerry 10
            ],
            [
                MODEL,
                [
                    VENDOR,
                    BLACKBERRY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Asus
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // HTC
                /(nexus 9)/i // HTC Nexus 9
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'HTC'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                // ZTE
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ],
            [
                VENDOR,
                [
                    MODEL,
                    /_/g,
                    ' '
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // TCL
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'TCL'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // itel
                /(itel) ((\w+))/i
            ],
            [
                [
                    VENDOR,
                    lowerize
                ],
                MODEL,
                [
                    TYPE,
                    strMapper,
                    {
                        'tablet': [
                            'p10001l',
                            'w7001'
                        ],
                        '*': 'mobile'
                    }
                ]
            ],
            [
                // Acer
                /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Acer'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Meizu
                /droid.+; (m[1-5] note) bui/i,
                /\bmz-([-\w]{2,})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Meizu'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Ulefone
                /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Ulefone'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Energizer
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Energizer'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Cat
                /; cat (b35);/i,
                /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Cat'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Smartfren
                /((?:new )?andromax[\w- ]+)(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Smartfren'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Nothing
                /droid.+; (a(?:015|06[35]|142p?))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Nothing'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Archos
                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Archos'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /archos ([\w ]+)( b|\))/i,
                /; (ac[3-6]\d\w{2,8})( b|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Archos'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // MIXED
                /(imo) (tab \w+)/i,
                /(infinix) (x1101b?)/i // Infinix XPad
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
                /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
                /(oppo) ?([\w ]+) bui/i // OPPO
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kobo)\s(ereader|touch)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i // Vodafone
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(surface duo)/i // Surface Duo
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid [\d\.]+; (fp\du?)(?: b|\))/i // Fairphone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Fairphone'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(u304aa)/i // AT&T
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'AT&T'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\bsie-(\w*)/i // Siemens
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Siemens'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(rct\w+) b/i // RCA Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'RCA'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(venue[\d ]{2,7}) b/i // Dell Venue Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Dell'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(q(?:mv|ta)\w+) b/i // Verizon Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Verizon'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i // Barnes & Noble Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Barnes & Noble'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(tm\d{3}\w+) b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'NuVision'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(k88) b/i // ZTE K Series Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'ZTE'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(nx\d{3}j) b/i // ZTE Nubia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'ZTE'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(gen\d{3}) b.+49h/i // Swiss GEN Mobile
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Swiss'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(zur\d{3}) b/i // Swiss ZUR Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Swiss'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((zeki)?tb.*\b) b/i // Zeki Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Zeki'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b([yr]\d{2}) b/i,
                /\b(dragon[- ]+touch |dt)(\w{5}) b/i // Dragon Touch Tablet
            ],
            [
                [
                    VENDOR,
                    'Dragon Touch'
                ],
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(ns-?\w{0,9}) b/i // Insignia Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Insignia'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((nxa|next)-?\w{0,9}) b/i // NextBook Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'NextBook'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i // Voice Xtreme Phones
            ],
            [
                [
                    VENDOR,
                    'Voice'
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(lvtel\-)?(v1[12]) b/i // LvTel Phones
            ],
            [
                [
                    VENDOR,
                    'LvTel'
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(ph-1) /i // Essential PH-1
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Essential'
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(v(100md|700na|7011|917g).*\b) b/i // Envizen Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Envizen'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(trio[-\w\. ]+) b/i // MachSpeed Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'MachSpeed'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\btu_(1491) b/i // Rotor Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Rotor'
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i // Nvidia Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    NVIDIA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(sprint) (\w+)/i // Sprint Phones
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kin\.[onetw]{3})/i // Microsoft Kin
            ],
            [
                [
                    MODEL,
                    /\./g,
                    ' '
                ],
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i // Zebra
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                ///////////////////
                // SMARTTVS
                ///////////////////
                /smart-tv.+(samsung)/i // Samsung
            ],
            [
                VENDOR,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /hbbtv.+maple;(\d+)/i
            ],
            [
                [
                    MODEL,
                    /^/,
                    'SmartTV'
                ],
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i // LG SmartTV
            ],
            [
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(apple) ?tv/i // Apple TV
            ],
            [
                VENDOR,
                [
                    MODEL,
                    APPLE + ' TV'
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /crkey/i // Google Chromecast
            ],
            [
                [
                    MODEL,
                    CHROME + 'cast'
                ],
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /droid.+aft(\w+)( bui|\))/i // Fire TV
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(shield \w+ tv)/i // Nvidia Shield TV
            ],
            [
                MODEL,
                [
                    VENDOR,
                    NVIDIA
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\(dtv[\);].+(aquos)/i,
                /(aquos-tv[\w ]+)\)/i // Sharp
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(bravia[\w ]+)( bui|\))/i // Sony
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(mi(tv|box)-?\w+) bui/i // Xiaomi
            ],
            [
                MODEL,
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /Hbbtv.*(technisat) (.*);/i // TechniSAT
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i // HbbTV devices
            ],
            [
                [
                    VENDOR,
                    trim
                ],
                [
                    MODEL,
                    trim
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                // SmartTV from Unidentified Vendors
                /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
            ],
            [
                MODEL,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
            ],
            [
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                ///////////////////
                // CONSOLES
                ///////////////////
                /(ouya)/i,
                /(nintendo) ([wids3utch]+)/i // Nintendo
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /droid.+; (shield)( bui|\))/i // Nvidia Portable
            ],
            [
                MODEL,
                [
                    VENDOR,
                    NVIDIA
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /(playstation \w+)/i // Playstation
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /\b(xbox(?: one)?(?!; xbox))[\); ]/i // Microsoft Xbox
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                ///////////////////
                // WEARABLES
                ///////////////////
                /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i // Samsung Galaxy Watch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /((pebble))app/i,
                /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i // Asus ZenWatch / LG Watch / Pixel Watch
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(ow(?:19|20)?we?[1-3]{1,3})/i // Oppo Watch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    OPPO
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i // Apple Watch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(opwwe\d{3})/i // OnePlus Watch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ONEPLUS
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(moto 360)/i // Motorola 360
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(smartwatch 3)/i // Sony SmartWatch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(g watch r)/i // LG G Watch R
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (wt63?0{2,3})\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                ///////////////////
                // XR
                ///////////////////
                /droid.+; (glass) \d/i // Google Glass
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(pico) (4|neo3(?: link|pro)?)/i // Pico
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /; (quest( \d| pro)?)/i // Oculus Quest
            ],
            [
                MODEL,
                [
                    VENDOR,
                    FACEBOOK
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                ///////////////////
                // EMBEDDED
                ///////////////////
                /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i // Tesla
            ],
            [
                VENDOR,
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                /(aeobc)\b/i // Echo Dot
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                /(homepod).+mac os/i // Apple HomePod
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                /windows iot/i
            ],
            [
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                ////////////////////
                // MIXED (GENERIC)
                ///////////////////
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i // Android Phones from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i // Android Tablets from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i // Unidentifiable Tablet
            ],
            [
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i // Unidentifiable Mobile
            ],
            [
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid .+?; ([\w\. -]+)( bui|\))/i // Generic Android Device
            ],
            [
                MODEL,
                [
                    VENDOR,
                    'Generic'
                ]
            ]
        ],
        engine: [
            [
                /windows.+ edge\/([\w\.]+)/i // EdgeHTML
            ],
            [
                VERSION,
                [
                    NAME,
                    EDGE + 'HTML'
                ]
            ],
            [
                /(arkweb)\/([\w\.]+)/i // ArkWeb
            ],
            [
                NAME,
                VERSION
            ],
            [
                /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
            ],
            [
                VERSION,
                [
                    NAME,
                    'Blink'
                ]
            ],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i // LibWeb
            ],
            [
                NAME,
                VERSION
            ],
            [
                /ladybird\//i
            ],
            [
                [
                    NAME,
                    'LibWeb'
                ]
            ],
            [
                /rv\:([\w\.]{1,9})\b.+(gecko)/i // Gecko
            ],
            [
                VERSION,
                NAME
            ]
        ],
        os: [
            [
                // Windows
                /microsoft (windows) (vista|xp)/i // Windows (iTunes)
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i // Windows Phone
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ],
                [
                    NAME,
                    'Windows'
                ]
            ],
            [
                // iOS/macOS
                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i
            ],
            [
                [
                    VERSION,
                    /_/g,
                    '.'
                ],
                [
                    NAME,
                    'iOS'
                ]
            ],
            [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i // Mac OS
            ],
            [
                [
                    NAME,
                    MAC_OS
                ],
                [
                    VERSION,
                    /_/g,
                    '.'
                ]
            ],
            [
                // Mobile OSes
                /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i // Android-x86/HarmonyOS
            ],
            [
                VERSION,
                NAME
            ],
            [
                /(ubuntu) ([\w\.]+) like android/i // Ubuntu Touch
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    '$1 Touch'
                ],
                VERSION
            ],
            [
                // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\(bb(10);/i // BlackBerry 10
            ],
            [
                VERSION,
                [
                    NAME,
                    BLACKBERRY
                ]
            ],
            [
                /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i // Symbian
            ],
            [
                VERSION,
                [
                    NAME,
                    'Symbian'
                ]
            ],
            [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + ' OS'
                ]
            ],
            [
                /web0s;.+rt(tv)/i,
                /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i // WebOS
            ],
            [
                VERSION,
                [
                    NAME,
                    'webOS'
                ]
            ],
            [
                /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i // watchOS
            ],
            [
                VERSION,
                [
                    NAME,
                    'watchOS'
                ]
            ],
            [
                // Google Chromecast
                /crkey\/([\d\.]+)/i // Google Chromecast
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + 'cast'
                ]
            ],
            [
                /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i // Chromium OS
            ],
            [
                [
                    NAME,
                    CHROMIUM_OS
                ],
                VERSION
            ],
            [
                // Smart TVs
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                // Console
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                // Other
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
                /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i // Haiku
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(sunos) ?([\w\.\d]*)/i // Solaris
            ],
            [
                [
                    NAME,
                    'Solaris'
                ],
                VERSION
            ],
            [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i // UNIX
            ],
            [
                NAME,
                VERSION
            ]
        ]
    };
    /////////////////
    // Constructor
    ////////////////
    var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }
        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }
        var _navigator = typeof window !== UNDEF_TYPE && window.navigator ? window.navigator : undefined;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            // Brave-specific detection
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
                _browser[NAME] = 'Brave';
            }
            return _browser;
        };
        this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
                _device[TYPE] = MOBILE;
            }
            // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
            if (_isSelfNav && _device[MODEL] == 'Macintosh' && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
                _device[MODEL] = 'iPad';
                _device[TYPE] = TABLET;
            }
            return _device;
        };
        this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != 'Unknown') {
                _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS); // backward compatibility
            }
            return _os;
        };
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        };
        this.getUA = function() {
            return _ua;
        };
        this.setUA = function(ua) {
            _ua = typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = enumerize([
        NAME,
        VERSION,
        MAJOR
    ]);
    UAParser.CPU = enumerize([
        ARCHITECTURE
    ]);
    UAParser.DEVICE = enumerize([
        MODEL,
        VENDOR,
        TYPE,
        CONSOLE,
        MOBILE,
        SMARTTV,
        TABLET,
        WEARABLE,
        EMBEDDED
    ]);
    UAParser.ENGINE = UAParser.OS = enumerize([
        NAME,
        VERSION
    ]);
    ///////////
    // Export
    //////////
    // check js environment
    if (typeof exports !== UNDEF_TYPE) {
        // nodejs env
        if (("TURBOPACK compile-time value", "object") !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof define === FUNC_TYPE && define.amd) {
            ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
                return UAParser;
            }(__turbopack_context__.r, exports, module));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }
    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for(var prop in result){
                $.ua[prop] = result[prop];
            }
        };
    }
})(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/frontend/node_modules/qr/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*!
Copyright (c) 2023 Paul Miller (paulmillr.com)
The library paulmillr-qr is dual-licensed under the Apache 2.0 OR MIT license.
You can select a license of your choice.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ /**
 * Methods for encoding (generating) QR code patterns.
 * Check out decode.ts for decoding (reading).
 * @module
 * @example
```js
import encodeQR from 'qr';
const txt = 'Hello world';
const ascii = encodeQR(txt, 'ascii'); // Not all fonts are supported
const terminalFriendly = encodeQR(txt, 'term'); // 2x larger, all fonts are OK
const gifBytes = encodeQR(txt, 'gif'); // Uncompressed GIF
const svgElement = encodeQR(txt, 'svg'); // SVG vector image element
const array = encodeQR(txt, 'raw'); // 2d array for canvas or other libs
// import decodeQR from 'qr/decode.js';
```
 */ __turbopack_context__.s([
    "Bitmap",
    ()=>Bitmap,
    "ECMode",
    ()=>ECMode,
    "Encoding",
    ()=>Encoding,
    "_tests",
    ()=>_tests,
    "default",
    ()=>__TURBOPACK__default__export__,
    "encodeQR",
    ()=>encodeQR,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "utils",
    ()=>utils
]);
const R1_RUN_LENGTH_THRESHOLD = 5;
const R2_BLOCK_PENALTY = 3;
const R3_FINDER_PATTERN_LENGTH = 11;
const R3_FINDER_PENALTY = 40;
const R4_BALANCE_STEP_PERCENT = 5;
const R4_BALANCE_STEP_POINTS = 10;
// We do not use newline escape code directly in strings because it's not parser-friendly
const chCodes = {
    newline: 10,
    reset: 27
};
function assertNumber(n) {
    if (!Number.isSafeInteger(n)) throw new Error(`integer expected: ${n}`);
}
function validateVersion(ver) {
    if (!Number.isSafeInteger(ver) || ver < 1 || ver > 40) throw new Error(`Invalid version=${ver}. Expected number [1..40]`);
}
function bin(dec, pad) {
    return dec.toString(2).padStart(pad, '0');
}
function mod(a, b) {
    const result = a % b;
    return result >= 0 ? result : b + result;
}
function fillArr(length, val) {
    return new Array(length).fill(val);
}
/**
 * Interleaves byte blocks.
 * @param blocks [[1, 2, 3], [4, 5, 6]]
 * @returns [1, 4, 2, 5, 3, 6]
 */ function interleaveBytes(blocks) {
    let maxLen = 0;
    let totalLen = 0;
    for (const block of blocks){
        maxLen = Math.max(maxLen, block.length);
        totalLen += block.length;
    }
    const result = new Uint8Array(totalLen);
    let idx = 0;
    for(let i = 0; i < maxLen; i++){
        for (const block of blocks){
            if (i < block.length) result[idx++] = block[i];
        }
    }
    return result;
}
// Optimize for minimal score/penalty
function best() {
    let best;
    let bestScore = Infinity;
    return {
        add (score, value) {
            if (score >= bestScore) return;
            best = value;
            bestScore = score;
        },
        get: ()=>best,
        score: ()=>bestScore
    };
}
// Based on https://github.com/paulmillr/scure-base/blob/main/index.ts
function alphabet(alphabet) {
    return {
        has: (char)=>alphabet.includes(char),
        decode: (input)=>{
            if (!Array.isArray(input) || input.length && typeof input[0] !== 'string') throw new Error('alphabet.decode input should be array of strings');
            return input.map((letter)=>{
                if (typeof letter !== 'string') throw new Error(`alphabet.decode: not string element=${letter}`);
                const index = alphabet.indexOf(letter);
                if (index === -1) throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet}`);
                return index;
            });
        },
        encode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('alphabet.encode input should be an array of numbers');
            return digits.map((i)=>{
                assertNumber(i);
                if (i < 0 || i >= alphabet.length) throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet.length})`);
                return alphabet[i];
            });
        }
    };
}
class Bitmap {
    static size(size, limit) {
        if (typeof size === 'number') size = {
            height: size,
            width: size
        };
        if (!Number.isSafeInteger(size.height) && size.height !== Infinity) throw new Error(`Bitmap: invalid height=${size.height} (${typeof size.height})`);
        if (!Number.isSafeInteger(size.width) && size.width !== Infinity) throw new Error(`Bitmap: invalid width=${size.width} (${typeof size.width})`);
        if (limit !== undefined) {
            // Clamp length, so it won't overflow, also allows to use Infinity, so we draw until end
            size = {
                width: Math.min(size.width, limit.width),
                height: Math.min(size.height, limit.height)
            };
        }
        return size;
    }
    static fromString(s) {
        // Remove linebreaks on start and end, so we draw in `` section
        s = s.replace(/^\n+/g, '').replace(/\n+$/g, '');
        const lines = s.split(String.fromCharCode(chCodes.newline));
        const height = lines.length;
        const data = new Array(height);
        let width;
        for (const line of lines){
            const row = line.split('').map((i)=>{
                if (i === 'X') return true;
                if (i === ' ') return false;
                if (i === '?') return undefined;
                throw new Error(`Bitmap.fromString: unknown symbol=${i}`);
            });
            if (width && row.length !== width) throw new Error(`Bitmap.fromString different row sizes: width=${width} cur=${row.length}`);
            width = row.length;
            data.push(row);
        }
        if (!width) width = 0;
        return new Bitmap({
            height,
            width
        }, data);
    }
    data;
    height;
    width;
    constructor(size, data){
        const { height, width } = Bitmap.size(size);
        this.data = data || Array.from({
            length: height
        }, ()=>fillArr(width, undefined));
        this.height = height;
        this.width = width;
    }
    point(p) {
        return this.data[p.y][p.x];
    }
    isInside(p) {
        return 0 <= p.x && p.x < this.width && 0 <= p.y && p.y < this.height;
    }
    size(offset) {
        if (!offset) return {
            height: this.height,
            width: this.width
        };
        const { x, y } = this.xy(offset);
        return {
            height: this.height - y,
            width: this.width - x
        };
    }
    xy(c) {
        if (typeof c === 'number') c = {
            x: c,
            y: c
        };
        if (!Number.isSafeInteger(c.x)) throw new Error(`Bitmap: invalid x=${c.x}`);
        if (!Number.isSafeInteger(c.y)) throw new Error(`Bitmap: invalid y=${c.y}`);
        // Do modulo, so we can use negative positions
        c.x = mod(c.x, this.width);
        c.y = mod(c.y, this.height);
        return c;
    }
    // Basically every operation can be represented as rect
    rect(c, size, value) {
        const { x, y } = this.xy(c);
        const { height, width } = Bitmap.size(size, this.size({
            x,
            y
        }));
        for(let yPos = 0; yPos < height; yPos++){
            for(let xPos = 0; xPos < width; xPos++){
                // NOTE: we use give function relative coordinates inside box
                this.data[y + yPos][x + xPos] = typeof value === 'function' ? value({
                    x: xPos,
                    y: yPos
                }, this.data[y + yPos][x + xPos]) : value;
            }
        }
        return this;
    }
    // returns rectangular part of bitmap
    rectRead(c, size, fn) {
        return this.rect(c, size, (c, cur)=>{
            fn(c, cur);
            return cur;
        });
    }
    // Horizontal & vertical lines
    hLine(c, len, value) {
        return this.rect(c, {
            width: len,
            height: 1
        }, value);
    }
    vLine(c, len, value) {
        return this.rect(c, {
            width: 1,
            height: len
        }, value);
    }
    // add border
    border(border = 2, value) {
        const height = this.height + 2 * border;
        const width = this.width + 2 * border;
        const v = fillArr(border, value);
        const h = Array.from({
            length: border
        }, ()=>fillArr(width, value));
        return new Bitmap({
            height,
            width
        }, [
            ...h,
            ...this.data.map((i)=>[
                    ...v,
                    ...i,
                    ...v
                ]),
            ...h
        ]);
    }
    // Embed another bitmap on coordinates
    embed(c, bm) {
        return this.rect(c, bm.size(), ({ x, y })=>bm.data[y][x]);
    }
    // returns rectangular part of bitmap
    rectSlice(c, size = this.size()) {
        const rect = new Bitmap(Bitmap.size(size, this.size(this.xy(c))));
        this.rect(c, size, ({ x, y }, cur)=>rect.data[y][x] = cur);
        return rect;
    }
    // Change shape, replace rows with columns (data[y][x] -> data[x][y])
    inverse() {
        const { height, width } = this;
        const res = new Bitmap({
            height: width,
            width: height
        });
        return res.rect({
            x: 0,
            y: 0
        }, Infinity, ({ x, y })=>this.data[x][y]);
    }
    // Each pixel size is multiplied by factor
    scale(factor) {
        if (!Number.isSafeInteger(factor) || factor > 1024) throw new Error(`invalid scale factor: ${factor}`);
        const { height, width } = this;
        const res = new Bitmap({
            height: factor * height,
            width: factor * width
        });
        return res.rect({
            x: 0,
            y: 0
        }, Infinity, ({ x, y })=>this.data[Math.floor(y / factor)][Math.floor(x / factor)]);
    }
    clone() {
        const res = new Bitmap(this.size());
        return res.rect({
            x: 0,
            y: 0
        }, this.size(), ({ x, y })=>this.data[y][x]);
    }
    // Ensure that there is no undefined values left
    assertDrawn() {
        this.rectRead(0, Infinity, (_, cur)=>{
            if (typeof cur !== 'boolean') throw new Error(`Invalid color type=${typeof cur}`);
        });
    }
    // Simple string representation for debugging
    toString() {
        return this.data.map((i)=>i.map((j)=>j === undefined ? '?' : j ? 'X' : ' ').join('')).join(String.fromCharCode(chCodes.newline));
    }
    toASCII() {
        const { height, width, data } = this;
        let out = '';
        // Terminal character height is x2 of character width, so we process two rows of bitmap
        // to produce one row of ASCII
        for(let y = 0; y < height; y += 2){
            for(let x = 0; x < width; x++){
                const first = data[y][x];
                const second = y + 1 >= height ? true : data[y + 1][x]; // if last row outside bitmap, make it black
                if (!first && !second) out += '█'; // both rows white (empty)
                else if (!first && second) out += '▀'; // top row white
                else if (first && !second) out += '▄'; // down row white
                else if (first && second) out += ' '; // both rows black
            }
            out += String.fromCharCode(chCodes.newline);
        }
        return out;
    }
    toTerm() {
        const cc = String.fromCharCode(chCodes.reset);
        const reset = cc + '[0m';
        const whiteBG = cc + '[1;47m  ' + reset;
        const darkBG = cc + `[40m  ` + reset;
        return this.data.map((i)=>i.map((j)=>j ? darkBG : whiteBG).join('')).join(String.fromCharCode(chCodes.newline));
    }
    toSVG(optimize = true) {
        let out = `<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">`;
        // Construct optimized SVG path data.
        let pathData = '';
        let prevPoint;
        this.rectRead(0, Infinity, (point, val)=>{
            if (!val) return;
            const { x, y } = point;
            if (!optimize) {
                out += `<rect x="${x}" y="${y}" width="1" height="1" />`;
                return;
            }
            // https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/d#path_commands
            // Determine the shortest way to represent the initial cursor movement.
            // M - Move cursor (without drawing) to absolute coordinate pair.
            let m = `M${x} ${y}`;
            // Only allow using the relative cursor move command if previous points
            // were drawn.
            if (prevPoint) {
                // m - Move cursor (without drawing) to relative coordinate pair.
                const relM = `m${x - prevPoint.x} ${y - prevPoint.y}`;
                if (relM.length <= m.length) m = relM;
            }
            // Determine the shortest way to represent the cell's bottom line draw.
            // H - Draw line from cursor position to absolute x coordinate.
            // h - Draw line from cursor position to relative x coordinate.
            const bH = x < 10 ? `H${x}` : 'h-1';
            // v - Draw line from cursor position to relative y coordinate.
            // Z - Close path (draws line from cursor position to M coordinate).
            pathData += `${m}h1v1${bH}Z`;
            prevPoint = point;
        });
        if (optimize) out += `<path d="${pathData}"/>`;
        out += `</svg>`;
        return out;
    }
    toGIF() {
        // NOTE: Small, but inefficient implementation.
        // Uses 1 byte per pixel.
        const u16le = (i)=>[
                i & 0xff,
                i >>> 8 & 0xff
            ];
        const dims = [
            ...u16le(this.width),
            ...u16le(this.height)
        ];
        const data = [];
        this.rectRead(0, Infinity, (_, cur)=>data.push(+(cur === true)));
        const N = 126; // Block size
        // prettier-ignore
        const bytes = [
            0x47,
            0x49,
            0x46,
            0x38,
            0x37,
            0x61,
            ...dims,
            0xf6,
            0x00,
            0x00,
            0xff,
            0xff,
            0xff,
            ...fillArr(3 * 127, 0x00),
            0x2c,
            0x00,
            0x00,
            0x00,
            0x00,
            ...dims,
            0x00,
            0x07
        ];
        const fullChunks = Math.floor(data.length / N);
        // Full blocks
        for(let i = 0; i < fullChunks; i++)bytes.push(N + 1, 0x80, ...data.slice(N * i, N * (i + 1)).map((i)=>+i));
        // Remaining bytes
        bytes.push(data.length % N + 1, 0x80, ...data.slice(fullChunks * N).map((i)=>+i));
        bytes.push(0x01, 0x81, 0x00, 0x3b);
        return new Uint8Array(bytes);
    }
    toImage(isRGB = false) {
        const { height, width } = this.size();
        const data = new Uint8Array(height * width * (isRGB ? 3 : 4));
        let i = 0;
        for(let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                const value = !!this.data[y][x] ? 0 : 255;
                data[i++] = value;
                data[i++] = value;
                data[i++] = value;
                if (!isRGB) data[i++] = 255; // alpha channel
            }
        }
        return {
            height,
            width,
            data
        };
    }
}
const ECMode = [
    'low',
    'medium',
    'quartile',
    'high'
];
const Encoding = [
    'numeric',
    'alphanumeric',
    'byte',
    'kanji',
    'eci'
];
// Various constants & tables
// prettier-ignore
const BYTES = [
    // 1,  2,  3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,   20,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    //  21,   22,   23,   24,   25,   26,   27,   28,   29,   30,   31,   32,   33,   34,   35,   36,   37,   38,   39,   40
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
// prettier-ignore
const WORDS_PER_BLOCK = {
    // Version 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    low: [
        7,
        10,
        15,
        20,
        26,
        18,
        20,
        24,
        30,
        18,
        20,
        24,
        26,
        30,
        22,
        24,
        28,
        30,
        28,
        28,
        28,
        28,
        30,
        30,
        26,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ],
    medium: [
        10,
        16,
        26,
        18,
        24,
        16,
        18,
        22,
        22,
        26,
        30,
        22,
        22,
        24,
        24,
        28,
        28,
        26,
        26,
        26,
        26,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28
    ],
    quartile: [
        13,
        22,
        18,
        26,
        18,
        24,
        18,
        22,
        20,
        24,
        28,
        26,
        24,
        20,
        30,
        24,
        28,
        28,
        26,
        30,
        28,
        30,
        30,
        30,
        30,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ],
    high: [
        17,
        28,
        22,
        16,
        22,
        28,
        26,
        26,
        24,
        28,
        24,
        28,
        22,
        24,
        24,
        30,
        28,
        28,
        26,
        28,
        30,
        24,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ]
};
// prettier-ignore
const ECC_BLOCKS = {
    // Version   1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    low: [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        4,
        4,
        4,
        4,
        4,
        6,
        6,
        6,
        6,
        7,
        8,
        8,
        9,
        9,
        10,
        12,
        12,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        19,
        20,
        21,
        22,
        24,
        25
    ],
    medium: [
        1,
        1,
        1,
        2,
        2,
        4,
        4,
        4,
        5,
        5,
        5,
        8,
        9,
        9,
        10,
        10,
        11,
        13,
        14,
        16,
        17,
        17,
        18,
        20,
        21,
        23,
        25,
        26,
        28,
        29,
        31,
        33,
        35,
        37,
        38,
        40,
        43,
        45,
        47,
        49
    ],
    quartile: [
        1,
        1,
        2,
        2,
        4,
        4,
        6,
        6,
        8,
        8,
        8,
        10,
        12,
        16,
        12,
        17,
        16,
        18,
        21,
        20,
        23,
        23,
        25,
        27,
        29,
        34,
        34,
        35,
        38,
        40,
        43,
        45,
        48,
        51,
        53,
        56,
        59,
        62,
        65,
        68
    ],
    high: [
        1,
        1,
        2,
        4,
        4,
        4,
        5,
        6,
        8,
        8,
        11,
        11,
        16,
        16,
        18,
        16,
        19,
        21,
        25,
        25,
        25,
        34,
        30,
        32,
        35,
        37,
        40,
        42,
        45,
        48,
        51,
        54,
        57,
        60,
        63,
        66,
        70,
        74,
        77,
        81
    ]
};
const info = {
    size: {
        encode: (ver)=>21 + 4 * (ver - 1),
        decode: (size)=>(size - 17) / 4
    },
    sizeType: (ver)=>Math.floor((ver + 7) / 17),
    // Based on https://codereview.stackexchange.com/questions/74925/algorithm-to-generate-this-alignment-pattern-locations-table-for-qr-codes
    alignmentPatterns (ver) {
        if (ver === 1) return [];
        const first = 6;
        const last = info.size.encode(ver) - first - 1;
        const distance = last - first;
        const count = Math.ceil(distance / 28);
        let interval = Math.floor(distance / count);
        if (interval % 2) interval += 1;
        else if (distance % count * 2 >= count) interval += 2;
        const res = [
            first
        ];
        for(let m = 1; m < count; m++)res.push(last - (count - m) * interval);
        res.push(last);
        return res;
    },
    ECCode: {
        low: 0b01,
        medium: 0b00,
        quartile: 0b11,
        high: 0b10
    },
    formatMask: 0b101010000010010,
    formatBits (ecc, maskIdx) {
        const data = info.ECCode[ecc] << 3 | maskIdx;
        let d = data;
        for(let i = 0; i < 10; i++)d = d << 1 ^ (d >> 9) * 0b10100110111;
        return (data << 10 | d) ^ info.formatMask;
    },
    versionBits (ver) {
        let d = ver;
        for(let i = 0; i < 12; i++)d = d << 1 ^ (d >> 11) * 0b1111100100101;
        return ver << 12 | d;
    },
    alphabet: {
        numeric: alphabet('0123456789'),
        alphanumerc: alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:')
    },
    lengthBits (ver, type) {
        const table = {
            numeric: [
                10,
                12,
                14
            ],
            alphanumeric: [
                9,
                11,
                13
            ],
            byte: [
                8,
                16,
                16
            ],
            kanji: [
                8,
                10,
                12
            ],
            eci: [
                0,
                0,
                0
            ]
        };
        return table[type][info.sizeType(ver)];
    },
    modeBits: {
        numeric: '0001',
        alphanumeric: '0010',
        byte: '0100',
        kanji: '1000',
        eci: '0111'
    },
    capacity (ver, ecc) {
        const bytes = BYTES[ver - 1];
        const words = WORDS_PER_BLOCK[ecc][ver - 1];
        const numBlocks = ECC_BLOCKS[ecc][ver - 1];
        const blockLen = Math.floor(bytes / numBlocks) - words;
        const shortBlocks = numBlocks - bytes % numBlocks;
        return {
            words,
            numBlocks,
            shortBlocks,
            blockLen,
            capacity: (bytes - words * numBlocks) * 8,
            total: (words + blockLen) * numBlocks + numBlocks - shortBlocks
        };
    }
};
const PATTERNS = [
    (x, y)=>(x + y) % 2 == 0,
    (_x, y)=>y % 2 == 0,
    (x, _y)=>x % 3 == 0,
    (x, y)=>(x + y) % 3 == 0,
    (x, y)=>(Math.floor(y / 2) + Math.floor(x / 3)) % 2 == 0,
    (x, y)=>x * y % 2 + x * y % 3 == 0,
    (x, y)=>(x * y % 2 + x * y % 3) % 2 == 0,
    (x, y)=>((x + y) % 2 + x * y % 3) % 2 == 0
];
// Galois field && reed-solomon encoding
const GF = {
    tables: ((p_poly)=>{
        const exp = fillArr(256, 0);
        const log = fillArr(256, 0);
        for(let i = 0, x = 1; i < 256; i++){
            exp[i] = x;
            log[x] = i;
            x <<= 1;
            if (x & 0x100) x ^= p_poly;
        }
        return {
            exp,
            log
        };
    })(0x11d),
    exp: (x)=>GF.tables.exp[x],
    log (x) {
        if (x === 0) throw new Error(`GF.log: invalid arg=${x}`);
        return GF.tables.log[x] % 255;
    },
    mul (x, y) {
        if (x === 0 || y === 0) return 0;
        return GF.tables.exp[(GF.tables.log[x] + GF.tables.log[y]) % 255];
    },
    add: (x, y)=>x ^ y,
    pow: (x, e)=>GF.tables.exp[GF.tables.log[x] * e % 255],
    inv (x) {
        if (x === 0) throw new Error(`GF.inverse: invalid arg=${x}`);
        return GF.tables.exp[255 - GF.tables.log[x]];
    },
    polynomial (poly) {
        if (poly.length == 0) throw new Error('GF.polymomial: invalid length');
        if (poly[0] !== 0) return poly;
        // Strip leading zeros
        let i = 0;
        for(; i < poly.length - 1 && poly[i] == 0; i++);
        return poly.slice(i);
    },
    monomial (degree, coefficient) {
        if (degree < 0) throw new Error(`GF.monomial: invalid degree=${degree}`);
        if (coefficient == 0) return [
            0
        ];
        let coefficients = fillArr(degree + 1, 0);
        coefficients[0] = coefficient;
        return GF.polynomial(coefficients);
    },
    degree: (a)=>a.length - 1,
    coefficient: (a, degree)=>a[GF.degree(a) - degree],
    mulPoly (a, b) {
        if (a[0] === 0 || b[0] === 0) return [
            0
        ];
        const res = fillArr(a.length + b.length - 1, 0);
        for(let i = 0; i < a.length; i++){
            for(let j = 0; j < b.length; j++){
                res[i + j] = GF.add(res[i + j], GF.mul(a[i], b[j]));
            }
        }
        return GF.polynomial(res);
    },
    mulPolyScalar (a, scalar) {
        if (scalar == 0) return [
            0
        ];
        if (scalar == 1) return a;
        const res = fillArr(a.length, 0);
        for(let i = 0; i < a.length; i++)res[i] = GF.mul(a[i], scalar);
        return GF.polynomial(res);
    },
    mulPolyMonomial (a, degree, coefficient) {
        if (degree < 0) throw new Error('GF.mulPolyMonomial: invalid degree');
        if (coefficient == 0) return [
            0
        ];
        const res = fillArr(a.length + degree, 0);
        for(let i = 0; i < a.length; i++)res[i] = GF.mul(a[i], coefficient);
        return GF.polynomial(res);
    },
    addPoly (a, b) {
        if (a[0] === 0) return b;
        if (b[0] === 0) return a;
        let smaller = a;
        let larger = b;
        if (smaller.length > larger.length) [smaller, larger] = [
            larger,
            smaller
        ];
        let sumDiff = fillArr(larger.length, 0);
        let lengthDiff = larger.length - smaller.length;
        let s = larger.slice(0, lengthDiff);
        for(let i = 0; i < s.length; i++)sumDiff[i] = s[i];
        for(let i = lengthDiff; i < larger.length; i++)sumDiff[i] = GF.add(smaller[i - lengthDiff], larger[i]);
        return GF.polynomial(sumDiff);
    },
    remainderPoly (data, divisor) {
        const out = Array.from(data);
        for(let i = 0; i < data.length - divisor.length + 1; i++){
            const elm = out[i];
            if (elm === 0) continue;
            for(let j = 1; j < divisor.length; j++){
                if (divisor[j] !== 0) out[i + j] = GF.add(out[i + j], GF.mul(divisor[j], elm));
            }
        }
        return out.slice(data.length - divisor.length + 1, out.length);
    },
    divisorPoly (degree) {
        let g = [
            1
        ];
        for(let i = 0; i < degree; i++)g = GF.mulPoly(g, [
            1,
            GF.pow(2, i)
        ]);
        return g;
    },
    evalPoly (poly, a) {
        if (a == 0) return GF.coefficient(poly, 0); // Just return the x^0 coefficient
        let res = poly[0];
        for(let i = 1; i < poly.length; i++)res = GF.add(GF.mul(a, res), poly[i]);
        return res;
    },
    // TODO: cleanup
    euclidian (a, b, R) {
        // Force degree(a) >= degree(b)
        if (GF.degree(a) < GF.degree(b)) [a, b] = [
            b,
            a
        ];
        let rLast = a;
        let r = b;
        let tLast = [
            0
        ];
        let t = [
            1
        ];
        // while degree of Ri ≥ t/2
        while(2 * GF.degree(r) >= R){
            let rLastLast = rLast;
            let tLastLast = tLast;
            rLast = r;
            tLast = t;
            if (rLast[0] === 0) throw new Error('rLast[0] === 0');
            r = rLastLast;
            let q = [
                0
            ];
            const dltInverse = GF.inv(rLast[0]);
            while(GF.degree(r) >= GF.degree(rLast) && r[0] !== 0){
                const degreeDiff = GF.degree(r) - GF.degree(rLast);
                const scale = GF.mul(r[0], dltInverse);
                q = GF.addPoly(q, GF.monomial(degreeDiff, scale));
                r = GF.addPoly(r, GF.mulPolyMonomial(rLast, degreeDiff, scale));
            }
            q = GF.mulPoly(q, tLast);
            t = GF.addPoly(q, tLastLast);
            if (GF.degree(r) >= GF.degree(rLast)) throw new Error(`Division failed r: ${r}, rLast: ${rLast}`);
        }
        const sigmaTildeAtZero = GF.coefficient(t, 0);
        if (sigmaTildeAtZero == 0) throw new Error('sigmaTilde(0) was zero');
        const inverse = GF.inv(sigmaTildeAtZero);
        return [
            GF.mulPolyScalar(t, inverse),
            GF.mulPolyScalar(r, inverse)
        ];
    }
};
function RS(eccWords) {
    return {
        encode (from) {
            const d = GF.divisorPoly(eccWords);
            const pol = Array.from(from);
            pol.push(...d.slice(0, -1).fill(0));
            return Uint8Array.from(GF.remainderPoly(pol, d));
        },
        decode (to) {
            const res = to.slice();
            const poly = GF.polynomial(Array.from(to));
            // Find errors
            let syndrome = fillArr(eccWords, 0);
            let hasError = false;
            for(let i = 0; i < eccWords; i++){
                const evl = GF.evalPoly(poly, GF.exp(i));
                syndrome[syndrome.length - 1 - i] = evl;
                if (evl !== 0) hasError = true;
            }
            if (!hasError) return res;
            syndrome = GF.polynomial(syndrome);
            const monomial = GF.monomial(eccWords, 1);
            const [errorLocator, errorEvaluator] = GF.euclidian(monomial, syndrome, eccWords);
            // Error locations
            const locations = fillArr(GF.degree(errorLocator), 0);
            let e = 0;
            for(let i = 1; i < 256 && e < locations.length; i++){
                if (GF.evalPoly(errorLocator, i) === 0) locations[e++] = GF.inv(i);
            }
            if (e !== locations.length) throw new Error('RS.decode: invalid errors number');
            for(let i = 0; i < locations.length; i++){
                const pos = res.length - 1 - GF.log(locations[i]);
                if (pos < 0) throw new Error('RS.decode: invalid error location');
                const xiInverse = GF.inv(locations[i]);
                let denominator = 1;
                for(let j = 0; j < locations.length; j++){
                    if (i === j) continue;
                    denominator = GF.mul(denominator, GF.add(1, GF.mul(locations[j], xiInverse)));
                }
                res[pos] = GF.add(res[pos], GF.mul(GF.evalPoly(errorEvaluator, xiInverse), GF.inv(denominator)));
            }
            return res;
        }
    };
}
// Interleaves blocks
function interleave(ver, ecc) {
    const { words, shortBlocks, numBlocks, blockLen, total } = info.capacity(ver, ecc);
    const rs = RS(words);
    return {
        encode (bytes) {
            // Add error correction to bytes
            const blocks = [];
            const eccBlocks = [];
            for(let i = 0; i < numBlocks; i++){
                const isShort = i < shortBlocks;
                const len = blockLen + (isShort ? 0 : 1);
                blocks.push(bytes.subarray(0, len));
                eccBlocks.push(rs.encode(bytes.subarray(0, len)));
                bytes = bytes.subarray(len);
            }
            const resBlocks = interleaveBytes(blocks);
            const resECC = interleaveBytes(eccBlocks);
            const res = new Uint8Array(resBlocks.length + resECC.length);
            res.set(resBlocks);
            res.set(resECC, resBlocks.length);
            return res;
        },
        decode (data) {
            if (data.length !== total) throw new Error(`interleave.decode: len(data)=${data.length}, total=${total}`);
            const blocks = [];
            for(let i = 0; i < numBlocks; i++){
                const isShort = i < shortBlocks;
                blocks.push(new Uint8Array(words + blockLen + (isShort ? 0 : 1)));
            }
            // Short blocks
            let pos = 0;
            for(let i = 0; i < blockLen; i++){
                for(let j = 0; j < numBlocks; j++)blocks[j][i] = data[pos++];
            }
            // Long blocks
            for(let j = shortBlocks; j < numBlocks; j++)blocks[j][blockLen] = data[pos++];
            // ECC
            for(let i = blockLen; i < blockLen + words; i++){
                for(let j = 0; j < numBlocks; j++){
                    const isShort = j < shortBlocks;
                    blocks[j][i + (isShort ? 0 : 1)] = data[pos++];
                }
            }
            // Decode
            // Error-correct and copy data blocks together into a stream of bytes
            const res = [];
            for (const block of blocks)res.push(...Array.from(rs.decode(block)).slice(0, -words));
            return Uint8Array.from(res);
        }
    };
}
// Draw
// Generic template per version+ecc+mask. Can be cached, to speedup calculations.
function drawTemplate(ver, ecc, maskIdx, test = false) {
    const size = info.size.encode(ver);
    let b = new Bitmap(size + 2);
    // Finder patterns
    // We draw full pattern and later slice, since before addition of borders finder is truncated by one pixel on sides
    const finder = new Bitmap(3).rect(0, 3, true).border(1, false).border(1, true).border(1, false);
    b = b.embed(0, finder) // top left
    .embed({
        x: -finder.width,
        y: 0
    }, finder) // top right
    .embed({
        x: 0,
        y: -finder.height
    }, finder); // bottom left
    b = b.rectSlice(1, size);
    // Alignment patterns
    const align = new Bitmap(1).rect(0, 1, true).border(1, false).border(1, true);
    const alignPos = info.alignmentPatterns(ver);
    for (const y of alignPos){
        for (const x of alignPos){
            if (b.data[y][x] !== undefined) continue;
            b.embed({
                x: x - 2,
                y: y - 2
            }, align); // center of pattern should be at position
        }
    }
    // Timing patterns
    b = b.hLine({
        x: 0,
        y: 6
    }, Infinity, ({ x }, cur)=>cur === undefined ? x % 2 == 0 : cur).vLine({
        x: 6,
        y: 0
    }, Infinity, ({ y }, cur)=>cur === undefined ? y % 2 == 0 : cur);
    // Format information
    {
        const bits = info.formatBits(ecc, maskIdx);
        const getBit = (i)=>!test && (bits >> i & 1) == 1;
        // vertical
        for(let i = 0; i < 6; i++)b.data[i][8] = getBit(i); // right of top-left finder
        // TODO: re-write as lines, like:
        // b.vLine({ x: 8, y: 0 }, 6, ({ x, y }) => getBit(y));
        for(let i = 6; i < 8; i++)b.data[i + 1][8] = getBit(i); // after timing pattern
        for(let i = 8; i < 15; i++)b.data[size - 15 + i][8] = getBit(i); // right of bottom-left finder
        // horizontal
        for(let i = 0; i < 8; i++)b.data[8][size - i - 1] = getBit(i); // under top-right finder
        for(let i = 8; i < 9; i++)b.data[8][15 - i - 1 + 1] = getBit(i); // VVV, after timing
        for(let i = 9; i < 15; i++)b.data[8][15 - i - 1] = getBit(i); // under top-left finder
        b.data[size - 8][8] = !test; // bottom-left finder, right
    }
    // Version information
    if (ver >= 7) {
        const bits = info.versionBits(ver);
        for(let i = 0; i < 18; i += 1){
            const bit = !test && (bits >> i & 1) == 1;
            const x = Math.floor(i / 3);
            const y = i % 3 + size - 8 - 3;
            // two copies
            b.data[x][y] = bit;
            b.data[y][x] = bit;
        }
    }
    return b;
}
// zigzag: bottom->top && top->bottom
function zigzag(tpl, maskIdx, fn) {
    const size = tpl.height;
    const pattern = PATTERNS[maskIdx];
    // zig-zag pattern
    let dir = -1;
    let y = size - 1;
    // two columns at time
    for(let xOffset = size - 1; xOffset > 0; xOffset -= 2){
        if (xOffset == 6) xOffset = 5; // skip vertical timing pattern
        for(;; y += dir){
            for(let j = 0; j < 2; j += 1){
                const x = xOffset - j;
                if (tpl.data[y][x] !== undefined) continue; // skip already written elements
                fn(x, y, pattern(x, y));
            }
            if (y + dir < 0 || y + dir >= size) break;
        }
        dir = -dir; // change direction
    }
}
// NOTE: byte encoding is just representation, QR works with strings only. Most decoders will fail on raw byte array,
// since they expect unicode or other text encoding inside bytes
function detectType(str) {
    let type = 'numeric';
    for (let x of str){
        if (info.alphabet.numeric.has(x)) continue;
        type = 'alphanumeric';
        if (!info.alphabet.alphanumerc.has(x)) return 'byte';
    }
    return type;
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function encode(ver, ecc, data, type, encoder = utf8ToBytes) {
    let encoded = '';
    let dataLen = data.length;
    if (type === 'numeric') {
        const t = info.alphabet.numeric.decode(data.split(''));
        const n = t.length;
        for(let i = 0; i < n - 2; i += 3)encoded += bin(t[i] * 100 + t[i + 1] * 10 + t[i + 2], 10);
        if (n % 3 === 1) {
            encoded += bin(t[n - 1], 4);
        } else if (n % 3 === 2) {
            encoded += bin(t[n - 2] * 10 + t[n - 1], 7);
        }
    } else if (type === 'alphanumeric') {
        const t = info.alphabet.alphanumerc.decode(data.split(''));
        const n = t.length;
        for(let i = 0; i < n - 1; i += 2)encoded += bin(t[i] * 45 + t[i + 1], 11);
        if (n % 2 == 1) encoded += bin(t[n - 1], 6); // pad if odd number of chars
    } else if (type === 'byte') {
        const utf8 = encoder(data);
        dataLen = utf8.length;
        encoded = Array.from(utf8).map((i)=>bin(i, 8)).join('');
    } else {
        throw new Error('encode: unsupported type');
    }
    const { capacity } = info.capacity(ver, ecc);
    const len = bin(dataLen, info.lengthBits(ver, type));
    let bits = info.modeBits[type] + len + encoded;
    if (bits.length > capacity) throw new Error('Capacity overflow');
    // Terminator
    bits += '0'.repeat(Math.min(4, Math.max(0, capacity - bits.length)));
    // Pad bits string untill full byte
    if (bits.length % 8) bits += '0'.repeat(8 - bits.length % 8);
    // Add padding until capacity is full
    const padding = '1110110000010001';
    for(let idx = 0; bits.length !== capacity; idx++)bits += padding[idx % padding.length];
    // Convert a bitstring to array of bytes
    const bytes = Uint8Array.from(bits.match(/(.{8})/g).map((i)=>Number(`0b${i}`)));
    return interleave(ver, ecc).encode(bytes);
}
// DRAW
function drawQR(ver, ecc, data, maskIdx, test = false) {
    const b = drawTemplate(ver, ecc, maskIdx, test);
    let i = 0;
    const need = 8 * data.length;
    zigzag(b, maskIdx, (x, y, mask)=>{
        let value = false;
        if (i < need) {
            value = (data[i >>> 3] >> (7 - i & 7) & 1) !== 0;
            i++;
        }
        b.data[y][x] = value !== mask; // !== as xor
    });
    if (i !== need) throw new Error('QR: bytes left after draw');
    return b;
}
function calculateRowRunPenalty(rowBits) {
    const moduleCount = rowBits.length;
    if (moduleCount <= 1) return 0;
    let penalty = 0;
    let runLength = 1;
    let previousColor = rowBits[0];
    for(let i = 1; i < moduleCount; i++){
        const currentColor = rowBits[i];
        if (currentColor === previousColor) {
            runLength++;
        } else {
            if (runLength >= R1_RUN_LENGTH_THRESHOLD) penalty += runLength - 2;
            runLength = 1;
            previousColor = currentColor;
        }
    }
    if (runLength >= R1_RUN_LENGTH_THRESHOLD) penalty += runLength - 2;
    return penalty;
}
function calculateColumnRunPenalty(bitmap, columnIndex, columnHeight) {
    if (columnHeight <= 1) return 0;
    let penalty = 0;
    let runLength = 1;
    let previousColor = bitmap[0][columnIndex];
    for(let y = 1; y < columnHeight; y++){
        const currentColor = bitmap[y][columnIndex];
        if (currentColor === previousColor) {
            runLength++;
        } else {
            if (runLength >= R1_RUN_LENGTH_THRESHOLD) penalty += runLength - 2;
            runLength = 1;
            previousColor = currentColor;
        }
    }
    if (runLength >= R1_RUN_LENGTH_THRESHOLD) penalty += runLength - 2;
    return penalty;
}
function calculateRowFinderPenalty(rowBits) {
    const rowLength = rowBits.length;
    if (rowLength < R3_FINDER_PATTERN_LENGTH) return 0;
    let penalty = 0;
    const lastStart = rowLength - R3_FINDER_PATTERN_LENGTH;
    for(let i = 0; i <= lastStart; i++){
        // Case A: L L L L + 1 0 1 1 1 0 1
        const light4ThenFinder7 = !rowBits[i] && !rowBits[i + 1] && !rowBits[i + 2] && !rowBits[i + 3] && rowBits[i + 4] && !rowBits[i + 5] && rowBits[i + 6] && rowBits[i + 7] && rowBits[i + 8] && !rowBits[i + 9] && rowBits[i + 10];
        // Case B: 1 0 1 1 1 0 1 + L L L L
        const finder7ThenLight4 = rowBits[i] && !rowBits[i + 1] && rowBits[i + 2] && rowBits[i + 3] && rowBits[i + 4] && !rowBits[i + 5] && rowBits[i + 6] && !rowBits[i + 7] && !rowBits[i + 8] && !rowBits[i + 9] && !rowBits[i + 10];
        if (light4ThenFinder7 || finder7ThenLight4) penalty += R3_FINDER_PENALTY;
    }
    return penalty;
}
function calculateColumnFinderPenalty(matrix, rowIndex, width) {
    if (width < R3_FINDER_PATTERN_LENGTH) return 0;
    let penalty = 0;
    const y = rowIndex;
    const lastStart = width - R3_FINDER_PATTERN_LENGTH;
    for(let x = 0; x <= lastStart; x++){
        // Case A: L L L L + 1 0 1 1 1 0 1
        const light4ThenFinder7 = !matrix[x][y] && !matrix[x + 1][y] && !matrix[x + 2][y] && !matrix[x + 3][y] && matrix[x + 4][y] && !matrix[x + 5][y] && matrix[x + 6][y] && matrix[x + 7][y] && matrix[x + 8][y] && !matrix[x + 9][y] && matrix[x + 10][y];
        // Case B: 1 0 1 1 1 0 1 + L L L L
        const finder7ThenLight4 = matrix[x][y] && !matrix[x + 1][y] && matrix[x + 2][y] && matrix[x + 3][y] && matrix[x + 4][y] && !matrix[x + 5][y] && matrix[x + 6][y] && !matrix[x + 7][y] && !matrix[x + 8][y] && !matrix[x + 9][y] && !matrix[x + 10][y];
        if (light4ThenFinder7 || finder7ThenLight4) penalty += R3_FINDER_PENALTY;
    }
    return penalty;
}
function penalty(bitmap) {
    const matrix = bitmap.data;
    const width = bitmap.width | 0;
    const height = bitmap.height | 0;
    if (width === 0 || height === 0) return 0;
    // Rule 1: same-color runs
    let runPenalty = 0;
    for(let x = 0; x < width; x++)runPenalty += calculateRowRunPenalty(matrix[x]);
    for(let y = 0; y < height; y++)runPenalty += calculateColumnRunPenalty(matrix, y, width);
    // Rule 2: 2×2 blocks of the same color
    let blockPenalty = 0;
    const lastCol = width - 1;
    const lastRow = height - 1;
    for(let x = 0; x < lastCol; x++){
        const col = matrix[x];
        const nextCol = matrix[x + 1];
        for(let y = 0; y < lastRow; y++){
            const cell = col[y];
            if (cell === nextCol[y] && cell === col[y + 1] && cell === nextCol[y + 1]) {
                blockPenalty += R2_BLOCK_PENALTY;
            }
        }
    }
    // Rule 3: finder-like 1:1:3:1:1 with 4-light padding
    let finderPenalty = 0;
    for(let x = 0; x < width; x++)finderPenalty += calculateRowFinderPenalty(matrix[x]);
    for(let y = 0; y < height; y++)finderPenalty += calculateColumnFinderPenalty(matrix, y, width);
    // Rule 4: dark-module balance vs 50%
    let darkCount = 0;
    for(let x = 0; x < width; x++){
        const col = matrix[x];
        for(let y = 0; y < height; y++)if (col[y]) darkCount++;
    }
    const moduleCount = width * height;
    const darkPercent = darkCount * 100 / moduleCount;
    const deviation = Math.abs(darkPercent - 50);
    const balancePenalty = R4_BALANCE_STEP_POINTS * Math.floor(deviation / R4_BALANCE_STEP_PERCENT);
    return runPenalty + blockPenalty + finderPenalty + balancePenalty;
}
// Selects best mask according to penalty, if no mask is provided
function drawQRBest(ver, ecc, data, maskIdx) {
    if (maskIdx === undefined) {
        const bestMask = best();
        for(let mask = 0; mask < PATTERNS.length; mask++)bestMask.add(penalty(drawQR(ver, ecc, data, mask, true)), mask);
        maskIdx = bestMask.get();
    }
    if (maskIdx === undefined) throw new Error('Cannot find mask'); // Should never happen
    return drawQR(ver, ecc, data, maskIdx);
}
function validateECC(ec) {
    if (!ECMode.includes(ec)) throw new Error(`Invalid error correction mode=${ec}. Expected: ${ECMode}`);
}
function validateEncoding(enc) {
    if (!Encoding.includes(enc)) throw new Error(`Encoding: invalid mode=${enc}. Expected: ${Encoding}`);
    if (enc === 'kanji' || enc === 'eci') throw new Error(`Encoding: ${enc} is not supported (yet?).`);
}
function validateMask(mask) {
    if (![
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ].includes(mask) || !PATTERNS[mask]) throw new Error(`Invalid mask=${mask}. Expected number [0..7]`);
}
function encodeQR(text, output = 'raw', opts = {}) {
    const ecc = opts.ecc !== undefined ? opts.ecc : 'medium';
    validateECC(ecc);
    const encoding = opts.encoding !== undefined ? opts.encoding : detectType(text);
    validateEncoding(encoding);
    if (opts.mask !== undefined) validateMask(opts.mask);
    let ver = opts.version;
    let data, err = new Error('Unknown error');
    if (ver !== undefined) {
        validateVersion(ver);
        data = encode(ver, ecc, text, encoding, opts.textEncoder);
    } else {
        // If no version is provided, try to find smallest one which fits
        // Currently just scans all version, can be significantly speedup if needed
        for(let i = 1; i <= 40; i++){
            try {
                data = encode(i, ecc, text, encoding, opts.textEncoder);
                ver = i;
                break;
            } catch (e) {
                err = e;
            }
        }
    }
    if (!ver || !data) throw err;
    let res = drawQRBest(ver, ecc, data, opts.mask);
    res.assertDrawn();
    const border = opts.border === undefined ? 2 : opts.border;
    if (!Number.isSafeInteger(border)) throw new Error(`invalid border type=${typeof border}`);
    res = res.border(border, false); // Add border
    if (opts.scale !== undefined) res = res.scale(opts.scale); // Scale image
    if (output === 'raw') return res.data;
    else if (output === 'ascii') return res.toASCII();
    else if (output === 'svg') return res.toSVG(opts.optimize);
    else if (output === 'gif') return res.toGIF();
    else if (output === 'term') return res.toTerm();
    else throw new Error(`Unknown output: ${output}`);
}
const __TURBOPACK__default__export__ = encodeQR;
const utils = {
    best,
    bin,
    drawTemplate,
    fillArr,
    info,
    interleave,
    validateVersion,
    zigzag
};
const _tests = {
    Bitmap,
    info,
    detectType,
    encode,
    drawQR,
    penalty,
    PATTERNS
}; // Type tests
 // const o1 = qr('test', 'ascii');
 // const o2 = qr('test', 'raw');
 // const o3 = qr('test', 'gif');
 // const o4 = qr('test', 'svg');
 // const o5 = qr('test', 'term');
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/cuer/_dist/QrCode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$qr$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/qr/index.js [app-ssr] (ecmascript)");
;
function create(value, options = {}) {
    const { errorCorrection, version } = options;
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$qr$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeQR"])(value, 'raw', {
        border: 0,
        ecc: errorCorrection,
        scale: 1,
        version: version
    });
    const finderLength = 7;
    const edgeLength = grid.length;
    return {
        edgeLength,
        finderLength,
        grid,
        value
    };
} //# sourceMappingURL=QrCode.js.map
}),
"[project]/frontend/node_modules/cuer/_dist/Cuer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cuer",
    ()=>Cuer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cuer$2f$_dist$2f$QrCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/cuer/_dist/QrCode.js [app-ssr] (ecmascript)");
;
;
;
function Cuer(props) {
    const { arena, ...rest } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(Cuer.Root, {
        ...rest,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Cuer.Finder, {}),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Cuer.Cells, {}),
            arena && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Cuer.Arena, {
                children: typeof arena === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("img", {
                    alt: "Arena",
                    src: arena,
                    style: {
                        borderRadius: 1,
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%'
                    }
                }) : arena
            })
        ]
    });
}
(function(Cuer) {
    Cuer.Context = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
    /**
     * Root component for the QR code.
     *
     * @params {@link Root.Props}
     * @returns A {@link React.ReactNode}
     */ function Root(props) {
        const { children, size = '100%', value, version, errorCorrection, ...rest } = props;
        // Check if the children contain an `Arena` component.
        const hasArena = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>{
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](child)) return null;
                if (typeof child.type === 'string') return null;
                if ('displayName' in child.type && child.type.displayName === 'Arena') return true;
                return null;
            }) ?? []).some(Boolean), [
            children
        ]);
        // Create the QR code.
        const qrcode = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
            let ecl = errorCorrection;
            // If the QR code has an arena, use a higher error correction level.
            if (hasArena && errorCorrection === 'low') ecl = 'medium';
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cuer$2f$_dist$2f$QrCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"](value, {
                errorCorrection: ecl,
                version
            });
        }, [
            value,
            hasArena,
            errorCorrection,
            version
        ]);
        const cellSize = 1;
        const edgeSize = qrcode.edgeLength * cellSize;
        const finderSize = qrcode.finderLength * cellSize / 2;
        const arenaSize = hasArena ? Math.floor(edgeSize / 4) : 0;
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                arenaSize,
                cellSize,
                edgeSize,
                qrcode,
                finderSize
            }), [
            arenaSize,
            edgeSize,
            qrcode,
            finderSize
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Cuer.Context.Provider, {
            value: context,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
                ...rest,
                width: size,
                height: size,
                viewBox: `0 0 ${edgeSize} ${edgeSize}`,
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("title", {
                        children: "QR Code"
                    }),
                    children
                ]
            })
        });
    }
    Cuer.Root = Root;
    (function(Root) {
        Root.displayName = 'Root';
    })(Root = Cuer.Root || (Cuer.Root = {}));
    /**
     * Finder component for the QR code. The finder pattern is the squares
     * on the top left, top right, and bottom left of the QR code.
     *
     * @params {@link Finder.Props}
     * @returns A {@link React.ReactNode}
     */ function Finder(props) {
        const { className, fill, innerClassName, radius = 0.25 } = props;
        const { cellSize, edgeSize, finderSize } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Cuer.Context);
        function Inner({ position }) {
            let outerX = finderSize - (finderSize - cellSize) - cellSize / 2;
            if (position === 'top-right') outerX = edgeSize - finderSize - (finderSize - cellSize) - cellSize / 2;
            let outerY = finderSize - (finderSize - cellSize) - cellSize / 2;
            if (position === 'bottom-left') outerY = edgeSize - finderSize - (finderSize - cellSize) - cellSize / 2;
            let innerX = finderSize - cellSize * 1.5;
            if (position === 'top-right') innerX = edgeSize - finderSize - cellSize * 1.5;
            let innerY = finderSize - cellSize * 1.5;
            if (position === 'bottom-left') innerY = edgeSize - finderSize - cellSize * 1.5;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("rect", {
                        className: className,
                        stroke: fill ?? 'currentColor',
                        fill: "transparent",
                        x: outerX,
                        y: outerY,
                        width: cellSize + (finderSize - cellSize) * 2,
                        height: cellSize + (finderSize - cellSize) * 2,
                        rx: 2 * radius * (finderSize - cellSize),
                        ry: 2 * radius * (finderSize - cellSize),
                        strokeWidth: cellSize
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("rect", {
                        className: innerClassName,
                        fill: fill ?? 'currentColor',
                        x: innerX,
                        y: innerY,
                        width: cellSize * 3,
                        height: cellSize * 3,
                        rx: 2 * radius * cellSize,
                        ry: 2 * radius * cellSize
                    })
                ]
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Inner, {
                    position: "top-left"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Inner, {
                    position: "top-right"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Inner, {
                    position: "bottom-left"
                })
            ]
        });
    }
    Cuer.Finder = Finder;
    (function(Finder) {
        Finder.displayName = 'Finder';
    })(Finder = Cuer.Finder || (Cuer.Finder = {}));
    /**
     * Cells for the QR code.
     *
     * @params {@link Cells.Props}
     * @returns A {@link React.ReactNode}
     */ function Cells(props) {
        const { className, fill = 'currentColor', inset: inset_ = true, radius = 1 } = props;
        const { arenaSize, cellSize, qrcode } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Cuer.Context);
        const { edgeLength, finderLength } = qrcode;
        const path = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
            let path = '';
            for(let i = 0; i < qrcode.grid.length; i++){
                const row = qrcode.grid[i];
                if (!row) continue;
                for(let j = 0; j < row.length; j++){
                    const cell = row[j];
                    if (!cell) continue;
                    // Skip rendering dots in arena area.
                    const start = edgeLength / 2 - arenaSize / 2;
                    const end = start + arenaSize;
                    if (i >= start && i <= end && j >= start && j <= end) continue;
                    // Skip rendering dots in the finder pattern areas
                    const topLeftFinder = i < finderLength && j < finderLength;
                    const topRightFinder = i < finderLength && j >= edgeLength - finderLength;
                    const bottomLeftFinder = i >= edgeLength - finderLength && j < finderLength;
                    if (topLeftFinder || topRightFinder || bottomLeftFinder) continue;
                    // Add inset for padding
                    const inset = inset_ ? cellSize * 0.1 : 0;
                    const innerSize = (cellSize - inset * 2) / 2;
                    // Calculate center positions
                    const cx = j * cellSize + cellSize / 2;
                    const cy = i * cellSize + cellSize / 2;
                    // Calculate edge positions
                    const left = cx - innerSize;
                    const right = cx + innerSize;
                    const top = cy - innerSize;
                    const bottom = cy + innerSize;
                    // Apply corner radius (clamped to maximum of innerSize)
                    const r = radius * innerSize;
                    path += [
                        `M ${left + r},${top}`,
                        `L ${right - r},${top}`,
                        `A ${r},${r} 0 0,1 ${right},${top + r}`,
                        `L ${right},${bottom - r}`,
                        `A ${r},${r} 0 0,1 ${right - r},${bottom}`,
                        `L ${left + r},${bottom}`,
                        `A ${r},${r} 0 0,1 ${left},${bottom - r}`,
                        `L ${left},${top + r}`,
                        `A ${r},${r} 0 0,1 ${left + r},${top}`,
                        'z'
                    ].join(' ');
                }
            }
            return path;
        }, [
            arenaSize,
            cellSize,
            edgeLength,
            finderLength,
            qrcode.grid,
            inset_,
            radius
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            className: className,
            d: path,
            fill: fill
        });
    }
    Cuer.Cells = Cells;
    (function(Cells) {
        Cells.displayName = 'Cells';
    })(Cells = Cuer.Cells || (Cuer.Cells = {}));
    /**
     * Arena component for the QR code. The arena is the area in the center
     * of the QR code that is not part of the finder pattern.
     *
     * @params {@link Arena.Props}
     * @returns A {@link React.ReactNode}
     */ function Arena(props) {
        const { children } = props;
        const { arenaSize, cellSize, edgeSize } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Cuer.Context);
        const start = Math.ceil(edgeSize / 2 - arenaSize / 2);
        const size = arenaSize + arenaSize % 2;
        const padding = cellSize / 2;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("foreignObject", {
            x: start,
            y: start,
            width: size,
            height: size,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: {
                    alignItems: 'center',
                    display: 'flex',
                    fontSize: 1,
                    justifyContent: 'center',
                    height: '100%',
                    overflow: 'hidden',
                    width: '100%',
                    padding,
                    boxSizing: 'border-box'
                },
                children: children
            })
        });
    }
    Cuer.Arena = Arena;
    (function(Arena) {
        Arena.displayName = 'Arena';
    })(Arena = Cuer.Arena || (Cuer.Arena = {}));
})(Cuer || (Cuer = {})); //# sourceMappingURL=Cuer.js.map
}),
"[project]/frontend/node_modules/@wagmi/core/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combine",
    ()=>combine,
    "createJSONStorage",
    ()=>createJSONStorage,
    "devtools",
    ()=>devtools,
    "persist",
    ()=>persist,
    "redux",
    ()=>redux,
    "subscribeWithSelector",
    ()=>subscribeWithSelector
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("frontend/node_modules/@wagmi/core/node_modules/zustand/esm/middleware.mjs")}`;
    }
};
const reduxImpl = (reducer, initial)=>(set, _get, api)=>{
        api.dispatch = (action)=>{
            set((state)=>reducer(state, action), false, action);
            return action;
        };
        api.dispatchFromDevtools = true;
        return {
            dispatch: (...a)=>api.dispatch(...a),
            ...initial
        };
    };
const redux = reduxImpl;
const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name)=>{
    const api = trackedConnections.get(name);
    if (!api) return {};
    return Object.fromEntries(Object.entries(api.stores).map(([key, api2])=>[
            key,
            api2.getState()
        ]));
};
const extractConnectionInformation = (store, extensionConnector, options)=>{
    if (store === void 0) {
        return {
            type: "untracked",
            connection: extensionConnector.connect(options)
        };
    }
    const existingConnection = trackedConnections.get(options.name);
    if (existingConnection) {
        return {
            type: "tracked",
            store,
            ...existingConnection
        };
    }
    const newConnection = {
        connection: extensionConnector.connect(options),
        stores: {}
    };
    trackedConnections.set(options.name, newConnection);
    return {
        type: "tracked",
        store,
        ...newConnection
    };
};
const devtoolsImpl = (fn, devtoolsOptions = {})=>(set, get, api)=>{
        const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
        let extensionConnector;
        try {
            extensionConnector = (enabled != null ? enabled : (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
        } catch (e) {}
        if (!extensionConnector) {
            return fn(set, get, api);
        }
        const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
        let isRecording = true;
        api.setState = (state, replace, nameOrAction)=>{
            const r = set(state, replace);
            if (!isRecording) return r;
            const action = nameOrAction === void 0 ? {
                type: anonymousActionType || "anonymous"
            } : typeof nameOrAction === "string" ? {
                type: nameOrAction
            } : nameOrAction;
            if (store === void 0) {
                connection == null ? void 0 : connection.send(action, get());
                return r;
            }
            connection == null ? void 0 : connection.send({
                ...action,
                type: `${store}/${action.type}`
            }, {
                ...getTrackedConnectionState(options.name),
                [store]: api.getState()
            });
            return r;
        };
        const setStateFromDevtools = (...a)=>{
            const originalIsRecording = isRecording;
            isRecording = false;
            set(...a);
            isRecording = originalIsRecording;
        };
        const initialState = fn(api.setState, get, api);
        if (connectionInformation.type === "untracked") {
            connection == null ? void 0 : connection.init(initialState);
        } else {
            connectionInformation.stores[connectionInformation.store] = api;
            connection == null ? void 0 : connection.init(Object.fromEntries(Object.entries(connectionInformation.stores).map(([key, store2])=>[
                    key,
                    key === connectionInformation.store ? initialState : store2.getState()
                ])));
        }
        if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
            let didWarnAboutReservedActionType = false;
            const originalDispatch = api.dispatch;
            api.dispatch = (...a)=>{
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && a[0].type === "__setState" && !didWarnAboutReservedActionType) {
                    console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.');
                    didWarnAboutReservedActionType = true;
                }
                originalDispatch(...a);
            };
        }
        connection.subscribe((message)=>{
            var _a;
            switch(message.type){
                case "ACTION":
                    if (typeof message.payload !== "string") {
                        console.error("[zustand devtools middleware] Unsupported action format");
                        return;
                    }
                    return parseJsonThen(message.payload, (action)=>{
                        if (action.type === "__setState") {
                            if (store === void 0) {
                                setStateFromDevtools(action.state);
                                return;
                            }
                            if (Object.keys(action.state).length !== 1) {
                                console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                            }
                            const stateFromDevtools = action.state[store];
                            if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                                return;
                            }
                            if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                                setStateFromDevtools(stateFromDevtools);
                            }
                            return;
                        }
                        if (!api.dispatchFromDevtools) return;
                        if (typeof api.dispatch !== "function") return;
                        api.dispatch(action);
                    });
                case "DISPATCH":
                    switch(message.payload.type){
                        case "RESET":
                            setStateFromDevtools(initialState);
                            if (store === void 0) {
                                return connection == null ? void 0 : connection.init(api.getState());
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "COMMIT":
                            if (store === void 0) {
                                connection == null ? void 0 : connection.init(api.getState());
                                return;
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "ROLLBACK":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    connection == null ? void 0 : connection.init(api.getState());
                                    return;
                                }
                                setStateFromDevtools(state[store]);
                                connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                            });
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    return;
                                }
                                if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                                    setStateFromDevtools(state[store]);
                                }
                            });
                        case "IMPORT_STATE":
                            {
                                const { nextLiftedState } = message.payload;
                                const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
                                if (!lastComputedState) return;
                                if (store === void 0) {
                                    setStateFromDevtools(lastComputedState);
                                } else {
                                    setStateFromDevtools(lastComputedState[store]);
                                }
                                connection == null ? void 0 : connection.send(null, // FIXME no-any
                                nextLiftedState);
                                return;
                            }
                        case "PAUSE_RECORDING":
                            return isRecording = !isRecording;
                    }
                    return;
            }
        });
        return initialState;
    };
const devtools = devtoolsImpl;
const parseJsonThen = (stringified, f)=>{
    let parsed;
    try {
        parsed = JSON.parse(stringified);
    } catch (e) {
        console.error("[zustand devtools middleware] Could not parse the received json", e);
    }
    if (parsed !== void 0) f(parsed);
};
const subscribeWithSelectorImpl = (fn)=>(set, get, api)=>{
        const origSubscribe = api.subscribe;
        api.subscribe = (selector, optListener, options)=>{
            let listener = selector;
            if (optListener) {
                const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
                let currentSlice = selector(api.getState());
                listener = (state)=>{
                    const nextSlice = selector(state);
                    if (!equalityFn(currentSlice, nextSlice)) {
                        const previousSlice = currentSlice;
                        optListener(currentSlice = nextSlice, previousSlice);
                    }
                };
                if (options == null ? void 0 : options.fireImmediately) {
                    optListener(currentSlice, currentSlice);
                }
            }
            return origSubscribe(listener);
        };
        const initialState = fn(set, get, api);
        return initialState;
    };
const subscribeWithSelector = subscribeWithSelectorImpl;
const combine = (initialState, create)=>(...a)=>Object.assign({}, initialState, create(...a));
function createJSONStorage(getStorage, options) {
    let storage;
    try {
        storage = getStorage();
    } catch (e) {
        return;
    }
    const persistStorage = {
        getItem: (name)=>{
            var _a;
            const parse = (str2)=>{
                if (str2 === null) {
                    return null;
                }
                return JSON.parse(str2, options == null ? void 0 : options.reviver);
            };
            const str = (_a = storage.getItem(name)) != null ? _a : null;
            if (str instanceof Promise) {
                return str.then(parse);
            }
            return parse(str);
        },
        setItem: (name, newValue)=>storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)),
        removeItem: (name)=>storage.removeItem(name)
    };
    return persistStorage;
}
const toThenable = (fn)=>(input)=>{
        try {
            const result = fn(input);
            if (result instanceof Promise) {
                return result;
            }
            return {
                then (onFulfilled) {
                    return toThenable(onFulfilled)(result);
                },
                catch (_onRejected) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then (_onFulfilled) {
                    return this;
                },
                catch (onRejected) {
                    return toThenable(onRejected)(e);
                }
            };
        }
    };
const persistImpl = (config, baseOptions)=>(set, get, api)=>{
        let options = {
            storage: createJSONStorage(()=>localStorage),
            partialize: (state)=>state,
            version: 0,
            merge: (persistedState, currentState)=>({
                    ...currentState,
                    ...persistedState
                }),
            ...baseOptions
        };
        let hasHydrated = false;
        const hydrationListeners = /* @__PURE__ */ new Set();
        const finishHydrationListeners = /* @__PURE__ */ new Set();
        let storage = options.storage;
        if (!storage) {
            return config((...args)=>{
                console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
                set(...args);
            }, get, api);
        }
        const setItem = ()=>{
            const state = options.partialize({
                ...get()
            });
            return storage.setItem(options.name, {
                state,
                version: options.version
            });
        };
        const savedSetState = api.setState;
        api.setState = (state, replace)=>{
            savedSetState(state, replace);
            void setItem();
        };
        const configResult = config((...args)=>{
            set(...args);
            void setItem();
        }, get, api);
        api.getInitialState = ()=>configResult;
        let stateFromStorage;
        const hydrate = ()=>{
            var _a, _b;
            if (!storage) return;
            hasHydrated = false;
            hydrationListeners.forEach((cb)=>{
                var _a2;
                return cb((_a2 = get()) != null ? _a2 : configResult);
            });
            const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
            return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue)=>{
                if (deserializedStorageValue) {
                    if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
                        if (options.migrate) {
                            return [
                                true,
                                options.migrate(deserializedStorageValue.state, deserializedStorageValue.version)
                            ];
                        }
                        console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
                    } else {
                        return [
                            false,
                            deserializedStorageValue.state
                        ];
                    }
                }
                return [
                    false,
                    void 0
                ];
            }).then((migrationResult)=>{
                var _a2;
                const [migrated, migratedState] = migrationResult;
                stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
                set(stateFromStorage, true);
                if (migrated) {
                    return setItem();
                }
            }).then(()=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
                stateFromStorage = get();
                hasHydrated = true;
                finishHydrationListeners.forEach((cb)=>cb(stateFromStorage));
            }).catch((e)=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
            });
        };
        api.persist = {
            setOptions: (newOptions)=>{
                options = {
                    ...options,
                    ...newOptions
                };
                if (newOptions.storage) {
                    storage = newOptions.storage;
                }
            },
            clearStorage: ()=>{
                storage == null ? void 0 : storage.removeItem(options.name);
            },
            getOptions: ()=>options,
            rehydrate: ()=>hydrate(),
            hasHydrated: ()=>hasHydrated,
            onHydrate: (cb)=>{
                hydrationListeners.add(cb);
                return ()=>{
                    hydrationListeners.delete(cb);
                };
            },
            onFinishHydration: (cb)=>{
                finishHydrationListeners.add(cb);
                return ()=>{
                    finishHydrationListeners.delete(cb);
                };
            }
        };
        if (!options.skipHydration) {
            hydrate();
        }
        return stateFromStorage || configResult;
    };
const persist = persistImpl;
;
}),
"[project]/frontend/node_modules/@wagmi/core/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/frontend/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events){
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++){
        ee[i] = handlers[i].fn;
    }
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++){
            args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++){
                        args[j - 1] = arguments[j];
                    }
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
        }
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++){
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
            }
        }
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = EventEmitter;
}
}),
"[project]/frontend/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/frontend/node_modules/eventemitter3/index.js [app-ssr] (ecmascript) <export default as EventEmitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventEmitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@wagmi/connectors/dist/esm/walletConnect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "walletConnect",
    ()=>walletConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/errors/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$extractRpcUrls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/utils/extractRpcUrls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
;
;
walletConnect.type = 'walletConnect';
function walletConnect(parameters) {
    const isNewChainsStale = parameters.isNewChainsStale ?? true;
    let provider_;
    let providerPromise;
    const NAMESPACE = 'eip155';
    let accountsChanged;
    let chainChanged;
    let connect;
    let displayUri;
    let sessionDelete;
    let disconnect;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            id: 'walletConnect',
            name: 'WalletConnect',
            type: walletConnect.type,
            async setup () {
                const provider = await this.getProvider().catch(()=>null);
                if (!provider) return;
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
                if (!sessionDelete) {
                    sessionDelete = this.onSessionDelete.bind(this);
                    provider.on('session_delete', sessionDelete);
                }
            },
            async connect ({ chainId, withCapabilities, ...rest } = {}) {
                try {
                    const provider = await this.getProvider();
                    if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                    if (!displayUri) {
                        displayUri = this.onDisplayUri;
                        provider.on('display_uri', displayUri);
                    }
                    let targetChainId = chainId;
                    if (!targetChainId) {
                        const state = await config.storage?.getItem('state') ?? {};
                        const isChainSupported = config.chains.some((x)=>x.id === state.chainId);
                        if (isChainSupported) targetChainId = state.chainId;
                        else targetChainId = config.chains[0]?.id;
                    }
                    if (!targetChainId) throw new Error('No chains found on connector.');
                    const isChainsStale = await this.isChainsStale();
                    // If there is an active session with stale chains, disconnect current session.
                    if (provider.session && isChainsStale) await provider.disconnect();
                    // If there isn't an active session or chains are stale, connect.
                    if (!provider.session || isChainsStale) {
                        const optionalChains = config.chains.filter((chain)=>chain.id !== targetChainId).map((optionalChain)=>optionalChain.id);
                        await provider.connect({
                            optionalChains: [
                                targetChainId,
                                ...optionalChains
                            ],
                            ...'pairingTopic' in rest ? {
                                pairingTopic: rest.pairingTopic
                            } : {}
                        });
                        this.setRequestedChainsIds(config.chains.map((x)=>x.id));
                    }
                    // If session exists and chains are authorized, enable provider for required chain
                    const accounts = (await provider.enable()).map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x));
                    // Switch to chain if provided
                    let currentChainId = await this.getChainId();
                    if (chainId && currentChainId !== chainId) {
                        const chain = await this.switchChain({
                            chainId
                        }).catch((error)=>{
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code && error.cause?.message !== 'Missing or invalid. request() method: wallet_addEthereumChain') throw error;
                            return {
                                id: currentChainId
                            };
                        });
                        currentChainId = chain?.id ?? currentChainId;
                    }
                    if (displayUri) {
                        provider.removeListener('display_uri', displayUri);
                        displayUri = undefined;
                    }
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                    if (!sessionDelete) {
                        sessionDelete = this.onSessionDelete.bind(this);
                        provider.on('session_delete', sessionDelete);
                    }
                    return {
                        accounts: withCapabilities ? accounts.map((address)=>({
                                address,
                                capabilities: {}
                            })) : accounts,
                        chainId: currentChainId
                    };
                } catch (error) {
                    if (/(user rejected|connection request reset)/i.test(error?.message)) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    }
                    throw error;
                }
            },
            async disconnect () {
                const provider = await this.getProvider();
                try {
                    await provider?.disconnect();
                } catch (error) {
                    if (!/No matching key/i.test(error.message)) throw error;
                } finally{
                    if (chainChanged) {
                        provider?.removeListener('chainChanged', chainChanged);
                        chainChanged = undefined;
                    }
                    if (disconnect) {
                        provider?.removeListener('disconnect', disconnect);
                        disconnect = undefined;
                    }
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider?.on('connect', connect);
                    }
                    if (accountsChanged) {
                        provider?.removeListener('accountsChanged', accountsChanged);
                        accountsChanged = undefined;
                    }
                    if (sessionDelete) {
                        provider?.removeListener('session_delete', sessionDelete);
                        sessionDelete = undefined;
                    }
                    this.setRequestedChainsIds([]);
                }
            },
            async getAccounts () {
                const provider = await this.getProvider();
                return provider.accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x));
            },
            async getProvider ({ chainId } = {}) {
                async function initProvider() {
                    const optionalChains = config.chains.map((x)=>x.id);
                    if (!optionalChains.length) return;
                    const { EthereumProvider } = await __turbopack_context__.A("[project]/frontend/node_modules/@walletconnect/ethereum-provider/dist/index.es.js [app-ssr] (ecmascript, async loader)");
                    return await EthereumProvider.init({
                        ...parameters,
                        disableProviderPing: true,
                        optionalChains,
                        projectId: parameters.projectId,
                        rpcMap: Object.fromEntries(config.chains.map((chain)=>{
                            const [url] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$extractRpcUrls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractRpcUrls"])({
                                chain,
                                transports: config.transports
                            });
                            return [
                                chain.id,
                                url
                            ];
                        })),
                        showQrModal: parameters.showQrModal ?? true
                    });
                }
                if (!provider_) {
                    if (!providerPromise) providerPromise = initProvider();
                    provider_ = await providerPromise;
                    provider_?.events.setMaxListeners(Number.POSITIVE_INFINITY);
                }
                if (chainId) await this.switchChain?.({
                    chainId
                });
                return provider_;
            },
            async getChainId () {
                const provider = await this.getProvider();
                return provider.chainId;
            },
            async isAuthorized () {
                try {
                    const [accounts, provider] = await Promise.all([
                        this.getAccounts(),
                        this.getProvider()
                    ]);
                    // If an account does not exist on the session, then the connector is unauthorized.
                    if (!accounts.length) return false;
                    // If the chains are stale on the session, then the connector is unauthorized.
                    const isChainsStale = await this.isChainsStale();
                    if (isChainsStale && provider.session) {
                        await provider.disconnect().catch(()=>{});
                        return false;
                    }
                    return true;
                } catch  {
                    return false;
                }
            },
            async switchChain ({ addEthereumChainParameter, chainId }) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const chain = config.chains.find((x)=>x.id === chainId);
                if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"](new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]());
                try {
                    await Promise.all([
                        new Promise((resolve)=>{
                            const listener = ({ chainId: currentChainId })=>{
                                if (currentChainId === chainId) {
                                    config.emitter.off('change', listener);
                                    resolve();
                                }
                            };
                            config.emitter.on('change', listener);
                        }),
                        provider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
                                }
                            ]
                        })
                    ]);
                    const requestedChains = await this.getRequestedChainsIds();
                    this.setRequestedChainsIds([
                        ...requestedChains,
                        chainId
                    ]);
                    return chain;
                } catch (err) {
                    const error = err;
                    if (/(user rejected)/i.test(error.message)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    // Indicates chain is not added to provider
                    try {
                        let blockExplorerUrls;
                        if (addEthereumChainParameter?.blockExplorerUrls) blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
                        else blockExplorerUrls = chain.blockExplorers?.default.url ? [
                            chain.blockExplorers?.default.url
                        ] : [];
                        let rpcUrls;
                        if (addEthereumChainParameter?.rpcUrls?.length) rpcUrls = addEthereumChainParameter.rpcUrls;
                        else rpcUrls = [
                            ...chain.rpcUrls.default.http
                        ];
                        const addEthereumChain = {
                            blockExplorerUrls,
                            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                            chainName: addEthereumChainParameter?.chainName ?? chain.name,
                            iconUrls: addEthereumChainParameter?.iconUrls,
                            nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
                            rpcUrls
                        };
                        await provider.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                addEthereumChain
                            ]
                        });
                        const requestedChains = await this.getRequestedChainsIds();
                        this.setRequestedChainsIds([
                            ...requestedChains,
                            chainId
                        ]);
                        return chain;
                    } catch (error) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    }
                }
            },
            onAccountsChanged (accounts) {
                if (accounts.length === 0) this.onDisconnect();
                else config.emitter.emit('change', {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x))
                });
            },
            onChainChanged (chain) {
                const chainId = Number(chain);
                config.emitter.emit('change', {
                    chainId
                });
            },
            async onConnect (connectInfo) {
                const chainId = Number(connectInfo.chainId);
                const accounts = await this.getAccounts();
                config.emitter.emit('connect', {
                    accounts,
                    chainId
                });
            },
            async onDisconnect (_error) {
                this.setRequestedChainsIds([]);
                config.emitter.emit('disconnect');
                const provider = await this.getProvider();
                if (accountsChanged) {
                    provider.removeListener('accountsChanged', accountsChanged);
                    accountsChanged = undefined;
                }
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                if (sessionDelete) {
                    provider.removeListener('session_delete', sessionDelete);
                    sessionDelete = undefined;
                }
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
            },
            onDisplayUri (uri) {
                config.emitter.emit('message', {
                    type: 'display_uri',
                    data: uri
                });
            },
            onSessionDelete () {
                this.onDisconnect();
            },
            getNamespaceChainsIds () {
                if (!provider_) return [];
                const chainIds = provider_.session?.namespaces[NAMESPACE]?.accounts?.map((account)=>Number.parseInt(account.split(':')[1] || '', 10));
                return chainIds ?? [];
            },
            async getRequestedChainsIds () {
                return await config.storage?.getItem(this.requestedChainsStorageKey) ?? [];
            },
            /**
         * Checks if the target chains match the chains that were
         * initially requested by the connector for the WalletConnect session.
         * If there is a mismatch, this means that the chains on the connector
         * are considered stale, and need to be revalidated at a later point (via
         * connection).
         *
         * There may be a scenario where a dapp adds a chain to the
         * connector later on, however, this chain will not have been approved or rejected
         * by the wallet. In this case, the chain is considered stale.
         */ async isChainsStale () {
                if (!isNewChainsStale) return false;
                const connectorChains = config.chains.map((x)=>x.id);
                const namespaceChains = this.getNamespaceChainsIds();
                if (namespaceChains.length && !namespaceChains.some((id)=>connectorChains.includes(id))) return false;
                const requestedChains = await this.getRequestedChainsIds();
                return !connectorChains.every((id)=>requestedChains.includes(id));
            },
            async setRequestedChainsIds (chains) {
                await config.storage?.setItem(this.requestedChainsStorageKey, chains);
            },
            get requestedChainsStorageKey () {
                return `${this.id}.requestedChains`;
            }
        }));
} //# sourceMappingURL=walletConnect.js.map
}),
"[project]/frontend/node_modules/@wagmi/connectors/dist/esm/baseAccount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseAccount",
    ()=>baseAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/errors/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
;
;
function baseAccount(parameters = {}) {
    let walletProvider;
    let accountsChanged;
    let chainChanged;
    let disconnect;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            id: 'baseAccount',
            name: 'Base Account',
            rdns: 'app.base.account',
            type: 'baseAccount',
            async connect ({ chainId, withCapabilities, ...rest } = {}) {
                try {
                    const provider = await this.getProvider();
                    const targetChainId = chainId ?? config.chains[0]?.id;
                    if (!targetChainId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
                    const response = await provider.request({
                        method: 'wallet_connect',
                        params: [
                            {
                                capabilities: 'capabilities' in rest && rest.capabilities ? rest.capabilities : {},
                                chainIds: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(targetChainId),
                                    ...config.chains.filter((x)=>x.id !== targetChainId).map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(x.id))
                                ]
                            }
                        ]
                    });
                    const accounts = response.accounts.map((account)=>({
                            address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(account.address),
                            capabilities: account.capabilities ?? {}
                        }));
                    let currentChainId = Number(response.chainIds[0]);
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                    // Switch to chain if provided
                    if (chainId && currentChainId !== chainId) {
                        const chain = await this.switchChain({
                            chainId
                        }).catch((error)=>{
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw error;
                            return {
                                id: currentChainId
                            };
                        });
                        currentChainId = chain?.id ?? currentChainId;
                    }
                    return {
                        // TODO(v3): Make `withCapabilities: true` default behavior
                        accounts: withCapabilities ? accounts : accounts.map((account)=>account.address),
                        chainId: currentChainId
                    };
                } catch (error) {
                    if (/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(error.message)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    throw error;
                }
            },
            async disconnect () {
                const provider = await this.getProvider();
                if (accountsChanged) {
                    provider.removeListener('accountsChanged', accountsChanged);
                    accountsChanged = undefined;
                }
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                provider.disconnect();
            },
            async getAccounts () {
                const provider = await this.getProvider();
                return (await provider.request({
                    method: 'eth_accounts'
                })).map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x));
            },
            async getChainId () {
                const provider = await this.getProvider();
                const chainId = await provider.request({
                    method: 'eth_chainId'
                });
                return Number(chainId);
            },
            async getProvider () {
                if (!walletProvider) {
                    const preference = (()=>{
                        if (typeof parameters.preference === 'string') return {
                            options: parameters.preference
                        };
                        return {
                            ...parameters.preference,
                            options: parameters.preference?.options ?? 'all'
                        };
                    })();
                    const { createBaseAccountSDK } = await __turbopack_context__.A("[project]/frontend/node_modules/@base-org/account/dist/index.node.js [app-ssr] (ecmascript, async loader)");
                    const sdk = createBaseAccountSDK({
                        ...parameters,
                        appChainIds: config.chains.map((x)=>x.id),
                        preference
                    });
                    walletProvider = sdk.getProvider();
                }
                return walletProvider;
            },
            async isAuthorized () {
                try {
                    const accounts = await this.getAccounts();
                    return !!accounts.length;
                } catch  {
                    return false;
                }
            },
            async switchChain ({ addEthereumChainParameter, chainId }) {
                const chain = config.chains.find((chain)=>chain.id === chainId);
                if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"](new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]());
                const provider = await this.getProvider();
                try {
                    await provider.request({
                        method: 'wallet_switchEthereumChain',
                        params: [
                            {
                                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id)
                            }
                        ]
                    });
                    return chain;
                } catch (error) {
                    // Indicates chain is not added to provider
                    if (error.code === 4902) {
                        try {
                            let blockExplorerUrls;
                            if (addEthereumChainParameter?.blockExplorerUrls) blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
                            else blockExplorerUrls = chain.blockExplorers?.default.url ? [
                                chain.blockExplorers?.default.url
                            ] : [];
                            let rpcUrls;
                            if (addEthereumChainParameter?.rpcUrls?.length) rpcUrls = addEthereumChainParameter.rpcUrls;
                            else rpcUrls = [
                                chain.rpcUrls.default?.http[0] ?? ''
                            ];
                            const addEthereumChain = {
                                blockExplorerUrls,
                                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                                chainName: addEthereumChainParameter?.chainName ?? chain.name,
                                iconUrls: addEthereumChainParameter?.iconUrls,
                                nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
                                rpcUrls
                            };
                            await provider.request({
                                method: 'wallet_addEthereumChain',
                                params: [
                                    addEthereumChain
                                ]
                            });
                            return chain;
                        } catch (error) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                        }
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
                }
            },
            onAccountsChanged (accounts) {
                if (accounts.length === 0) this.onDisconnect();
                else config.emitter.emit('change', {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x))
                });
            },
            onChainChanged (chain) {
                const chainId = Number(chain);
                config.emitter.emit('change', {
                    chainId
                });
            },
            async onDisconnect (_error) {
                config.emitter.emit('disconnect');
                const provider = await this.getProvider();
                if (accountsChanged) {
                    provider.removeListener('accountsChanged', accountsChanged);
                    accountsChanged = undefined;
                }
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
            }
        }));
} //# sourceMappingURL=baseAccount.js.map
}),
"[project]/frontend/node_modules/@wagmi/connectors/dist/esm/metaMask.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "metaMask",
    ()=>metaMask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/errors/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$extractRpcUrls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/utils/extractRpcUrls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/promise/withRetry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/promise/withTimeout.js [app-ssr] (ecmascript)");
;
;
metaMask.type = 'metaMask';
function metaMask(parameters = {}) {
    let sdk;
    let provider;
    let providerPromise;
    let accountsChanged;
    let chainChanged;
    let connect;
    let displayUri;
    let disconnect;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            id: 'metaMaskSDK',
            name: 'MetaMask',
            rdns: [
                'io.metamask',
                'io.metamask.mobile'
            ],
            type: metaMask.type,
            async setup () {
                const provider = await this.getProvider();
                if (provider?.on) {
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                    // We shouldn't need to listen for `'accountsChanged'` here since the `'connect'` event should suffice (and wallet shouldn't be connected yet).
                    // Some wallets, like MetaMask, do not implement the `'connect'` event and overload `'accountsChanged'` instead.
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                }
            },
            async connect ({ chainId, isReconnecting, withCapabilities } = {}) {
                const provider = await this.getProvider();
                if (!displayUri) {
                    displayUri = this.onDisplayUri;
                    provider.on('display_uri', displayUri);
                }
                let accounts = [];
                if (isReconnecting) accounts = await this.getAccounts().catch(()=>[]);
                try {
                    let signResponse;
                    let connectWithResponse;
                    if (!accounts?.length) {
                        if (parameters.connectAndSign || parameters.connectWith) {
                            if (parameters.connectAndSign) signResponse = await sdk.connectAndSign({
                                msg: parameters.connectAndSign
                            });
                            else if (parameters.connectWith) connectWithResponse = await sdk.connectWith({
                                method: parameters.connectWith.method,
                                params: parameters.connectWith.params
                            });
                            accounts = await this.getAccounts();
                        } else {
                            const requestedAccounts = await sdk.connect();
                            accounts = requestedAccounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x));
                        }
                    }
                    // Switch to chain if provided
                    let currentChainId = await this.getChainId();
                    if (chainId && currentChainId !== chainId) {
                        const chain = await this.switchChain({
                            chainId
                        }).catch((error)=>{
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw error;
                            return {
                                id: currentChainId
                            };
                        });
                        currentChainId = chain?.id ?? currentChainId;
                    }
                    if (displayUri) {
                        provider.removeListener('display_uri', displayUri);
                        displayUri = undefined;
                    }
                    if (signResponse) provider.emit('connectAndSign', {
                        accounts,
                        chainId: currentChainId,
                        signResponse
                    });
                    else if (connectWithResponse) provider.emit('connectWith', {
                        accounts,
                        chainId: currentChainId,
                        connectWithResponse
                    });
                    // Manage EIP-1193 event listeners
                    // https://eips.ethereum.org/EIPS/eip-1193#events
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                    return {
                        // TODO(v3): Make `withCapabilities: true` default behavior
                        accounts: withCapabilities ? accounts.map((address)=>({
                                address,
                                capabilities: {}
                            })) : accounts,
                        chainId: currentChainId
                    };
                } catch (err) {
                    const error = err;
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](error);
                    throw error;
                }
            },
            async disconnect () {
                const provider = await this.getProvider();
                // Manage EIP-1193 event listeners
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
                await sdk.terminate();
            },
            async getAccounts () {
                const provider = await this.getProvider();
                const accounts = await provider.request({
                    method: 'eth_accounts'
                });
                return accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x));
            },
            async getChainId () {
                const provider = await this.getProvider();
                const chainId = provider.getChainId() || await provider?.request({
                    method: 'eth_chainId'
                });
                return Number(chainId);
            },
            async getProvider () {
                async function initProvider() {
                    // Unwrapping import for Vite compatibility.
                    // See: https://github.com/vitejs/vite/issues/9703
                    const MetaMaskSDK = await (async ()=>{
                        const { default: SDK } = await __turbopack_context__.A("[project]/frontend/node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js [app-ssr] (ecmascript, async loader)");
                        if (typeof SDK !== 'function' && typeof SDK.default === 'function') return SDK.default;
                        return SDK;
                    })();
                    const readonlyRPCMap = {};
                    for (const chain of config.chains)readonlyRPCMap[(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id)] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$extractRpcUrls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractRpcUrls"])({
                        chain,
                        transports: config.transports
                    })?.[0];
                    sdk = new MetaMaskSDK({
                        _source: 'wagmi',
                        forceDeleteProvider: false,
                        forceInjectProvider: false,
                        injectProvider: false,
                        // Workaround cast since MetaMask SDK does not support `'exactOptionalPropertyTypes'`
                        ...parameters,
                        readonlyRPCMap,
                        dappMetadata: {
                            ...parameters.dappMetadata,
                            // Test if name and url are set AND not empty
                            name: parameters.dappMetadata?.name ? parameters.dappMetadata?.name : 'wagmi',
                            url: parameters.dappMetadata?.url ? parameters.dappMetadata?.url : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'https://wagmi.sh'
                        },
                        useDeeplink: parameters.useDeeplink ?? true
                    });
                    const result = await sdk.init();
                    // On initial load, sometimes `sdk.getProvider` does not return provider.
                    // https://github.com/wevm/wagmi/issues/4367
                    // Use result of `init` call if available.
                    const provider = (()=>{
                        if (result?.activeProvider) return result.activeProvider;
                        return sdk.getProvider();
                    })();
                    if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                    return provider;
                }
                if (!provider) {
                    if (!providerPromise) providerPromise = initProvider();
                    provider = await providerPromise;
                }
                return provider;
            },
            async isAuthorized () {
                try {
                    // MetaMask mobile provider sometimes fails to immediately resolve
                    // JSON-RPC requests on page load
                    const timeout = 200;
                    const accounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRetry"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withTimeout"])(()=>this.getAccounts(), {
                            timeout
                        }), {
                        delay: timeout + 1,
                        retryCount: 3
                    });
                    return !!accounts.length;
                } catch  {
                    return false;
                }
            },
            async switchChain ({ addEthereumChainParameter, chainId }) {
                const provider = await this.getProvider();
                const chain = config.chains.find((x)=>x.id === chainId);
                if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"](new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]());
                try {
                    await provider.request({
                        method: 'wallet_switchEthereumChain',
                        params: [
                            {
                                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
                            }
                        ]
                    });
                    // During `'wallet_switchEthereumChain'`, MetaMask makes a `'net_version'` RPC call to the target chain.
                    // If this request fails, MetaMask does not emit the `'chainChanged'` event, but will still switch the chain.
                    // To counter this behavior, we request and emit the current chain ID to confirm the chain switch either via
                    // this callback or an externally emitted `'chainChanged'` event.
                    // https://github.com/MetaMask/metamask-extension/issues/24247
                    await waitForChainIdToSync();
                    await sendAndWaitForChangeEvent(chainId);
                    return chain;
                } catch (err) {
                    const error = err;
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    // Indicates chain is not added to provider
                    if (error.code === 4902 || // Unwrapping for MetaMask Mobile
                    // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
                    error?.data?.originalError?.code === 4902) {
                        try {
                            await provider.request({
                                method: 'wallet_addEthereumChain',
                                params: [
                                    {
                                        blockExplorerUrls: (()=>{
                                            const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
                                            if (addEthereumChainParameter?.blockExplorerUrls) return addEthereumChainParameter.blockExplorerUrls;
                                            if (blockExplorer) return [
                                                blockExplorer.url,
                                                ...Object.values(blockExplorers).map((x)=>x.url)
                                            ];
                                            return;
                                        })(),
                                        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                                        chainName: addEthereumChainParameter?.chainName ?? chain.name,
                                        iconUrls: addEthereumChainParameter?.iconUrls,
                                        nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
                                        rpcUrls: (()=>{
                                            if (addEthereumChainParameter?.rpcUrls?.length) return addEthereumChainParameter.rpcUrls;
                                            return [
                                                chain.rpcUrls.default?.http[0] ?? ''
                                            ];
                                        })()
                                    }
                                ]
                            });
                            await waitForChainIdToSync();
                            await sendAndWaitForChangeEvent(chainId);
                            return chain;
                        } catch (err) {
                            const error = err;
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
                        }
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
                }
                async function waitForChainIdToSync() {
                    // On mobile, there is a race condition between the result of `'wallet_addEthereumChain'` and `'eth_chainId'`.
                    // To avoid this, we wait for `'eth_chainId'` to return the expected chain ID with a retry loop.
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
                        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(await provider.request({
                            method: 'eth_chainId'
                        }));
                        // `value` doesn't match expected `chainId`, throw to trigger retry
                        if (value !== chainId) throw new Error('User rejected switch after adding network.');
                        return value;
                    }, {
                        delay: 50,
                        retryCount: 20
                    });
                }
                async function sendAndWaitForChangeEvent(chainId) {
                    await new Promise((resolve)=>{
                        const listener = (data)=>{
                            if ('chainId' in data && data.chainId === chainId) {
                                config.emitter.off('change', listener);
                                resolve();
                            }
                        };
                        config.emitter.on('change', listener);
                        config.emitter.emit('change', {
                            chainId
                        });
                    });
                }
            },
            async onAccountsChanged (accounts) {
                // Disconnect if there are no accounts
                if (accounts.length === 0) {
                    // ... and using browser extension
                    if (sdk.isExtensionActive()) this.onDisconnect();
                    else return;
                } else if (config.emitter.listenerCount('connect')) {
                    const chainId = (await this.getChainId()).toString();
                    this.onConnect({
                        chainId
                    });
                } else config.emitter.emit('change', {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x))
                });
            },
            onChainChanged (chain) {
                const chainId = Number(chain);
                config.emitter.emit('change', {
                    chainId
                });
            },
            async onConnect (connectInfo) {
                const accounts = await this.getAccounts();
                if (accounts.length === 0) return;
                const chainId = Number(connectInfo.chainId);
                config.emitter.emit('connect', {
                    accounts,
                    chainId
                });
                const provider = await this.getProvider();
                if (connect) {
                    provider.removeListener('connect', connect);
                    connect = undefined;
                }
                if (!accountsChanged) {
                    accountsChanged = this.onAccountsChanged.bind(this);
                    provider.on('accountsChanged', accountsChanged);
                }
                if (!chainChanged) {
                    chainChanged = this.onChainChanged.bind(this);
                    provider.on('chainChanged', chainChanged);
                }
                if (!disconnect) {
                    disconnect = this.onDisconnect.bind(this);
                    provider.on('disconnect', disconnect);
                }
            },
            async onDisconnect (error) {
                const provider = await this.getProvider();
                // If MetaMask emits a `code: 1013` error, wait for reconnection before disconnecting
                // https://github.com/MetaMask/providers/pull/120
                if (error && error.code === 1013) {
                    if (provider && !!(await this.getAccounts()).length) return;
                }
                config.emitter.emit('disconnect');
                // Manage EIP-1193 event listeners
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
            },
            onDisplayUri (uri) {
                config.emitter.emit('message', {
                    type: 'display_uri',
                    data: uri
                });
            }
        }));
} //# sourceMappingURL=metaMask.js.map
}),
"[project]/frontend/node_modules/@wagmi/connectors/dist/esm/safe.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safe",
    ()=>safe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
;
;
safe.type = 'safe';
function safe(parameters = {}) {
    const { shimDisconnect = false } = parameters;
    let provider_;
    let disconnect;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            id: 'safe',
            name: 'Safe',
            type: safe.type,
            async connect ({ withCapabilities } = {}) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const accounts = await this.getAccounts();
                const chainId = await this.getChainId();
                if (!disconnect) {
                    disconnect = this.onDisconnect.bind(this);
                    provider.on('disconnect', disconnect);
                }
                // Remove disconnected shim if it exists
                if (shimDisconnect) await config.storage?.removeItem('safe.disconnected');
                return {
                    // TODO(v3): Make `withCapabilities: true` default behavior
                    accounts: withCapabilities ? accounts.map((address)=>({
                            address,
                            capabilities: {}
                        })) : accounts,
                    chainId
                };
            },
            async disconnect () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                // Add shim signalling connector is disconnected
                if (shimDisconnect) await config.storage?.setItem('safe.disconnected', true);
            },
            async getAccounts () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                return (await provider.request({
                    method: 'eth_accounts'
                })).map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"]);
            },
            async getProvider () {
                // Only allowed in iframe context
                const isIframe = "undefined" !== 'undefined' && window?.parent !== window;
                if ("TURBOPACK compile-time truthy", 1) return;
                //TURBOPACK unreachable
                ;
            },
            async getChainId () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                return Number(provider.chainId);
            },
            async isAuthorized () {
                try {
                    const isDisconnected = shimDisconnect && await config.storage?.getItem('safe.disconnected');
                    if (isDisconnected) return false;
                    const accounts = await this.getAccounts();
                    return !!accounts.length;
                } catch  {
                    return false;
                }
            },
            onAccountsChanged () {
            // Not relevant for Safe because changing account requires app reload.
            },
            onChainChanged () {
            // Not relevant for Safe because Safe smart contract wallets only exist on single chain.
            },
            onDisconnect () {
                config.emitter.emit('disconnect');
            }
        }));
} //# sourceMappingURL=safe.js.map
}),
];

//# sourceMappingURL=9e883_cad81b29._.js.map