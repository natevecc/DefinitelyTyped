// Type definitions for gulp-sourcemaps-2.0.0-alpha
// Project: https://github.com/floridoo/gulp-sourcemaps
// Definitions by: natevecc <https://github.com/natevecc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-sourcemaps" {

    interface InitOptions {
        loadMaps?: boolean;
        identityMap?: boolean;
        debug?: boolean;
    }

    interface WriteMapper {
        (file: string): string;
    }

    interface WriteFileMapper {
        // file parameter needs to be updated with the vinyl file object definition
        (file: any): string;
    }

    interface WriteOptions {
        addComment?: boolean;
        includeContent?: boolean;
        sourceRoot?: string | WriteMapper;
        destPath?: string;
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
