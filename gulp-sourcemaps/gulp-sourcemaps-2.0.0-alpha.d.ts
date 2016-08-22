// Type definitions for gulp-sourcemaps-2.0.0-alpha
// Project: https://github.com/floridoo/gulp-sourcemaps
// Definitions by: natevecc <https://github.com/natevecc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>
/// <reference path="../vinyl/vinyl.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>

declare module "gulp-sourcemaps" {
    import File = require("vinyl");
    import gulp = require("gulp");

    interface InitOptions {
        loadMaps?: boolean;
        identityMap?: boolean;
        debug?: boolean;
    }

    interface WriteMapper {
        (file: string): string;
    }

    interface WriteFileMapper {
        (file: File): string;
    }

    interface WriteOptions {
        addComment?: boolean;
        includeContent?: boolean;
        sourceRoot?: string | WriteMapper;
        destPath?: gulp.DestMethod;
        sourceMappingURLPrefix?: string | WriteMapper;
        sourceMappingURL?: WriteFileMapper;
        mapFile?: WriteMapper;
        mapSources?: WriteMapper;
        debug?: boolean;
        charset?: string;
    }

    export function init(opts?: InitOptions): NodeJS.ReadWriteStream;
    export function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream;
    export function write(opts?: WriteOptions): NodeJS.ReadWriteStream;
}