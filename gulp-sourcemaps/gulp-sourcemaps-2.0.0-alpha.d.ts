// Type definitions for gulp-sourcemaps-2.0.0-alpha
// Project: https://github.com/floridoo/gulp-sourcemaps
// Definitions by: natevecc <https://github.com/natevecc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>
/// <reference path="../vinyl/vinyl.d.ts"/>

declare module "gulp-sourcemaps" {
    import File = require("vinyl");

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
        destPath?: DestMethod;
        sourceMappingURLPrefix?: string | WriteMapper;
        sourceMappingURL?: WriteFileMapper;
        mapFile?: WriteMapper;
        mapSources?: WriteMapper;
        debug?: boolean;
        charset?: string;
    }

    // taken from ../gulp/gulp.d.ts line 87
    interface DestMethod {
        /**
         * Can be piped to and it will write files. Re-emits all data passed to it so you can pipe to multiple folders.
         * Folders that don't exist will be created.
         *
         * @param outFolder The path (output folder) to write files to. Or a function that returns it, the function will be provided a vinyl File instance.
         * @param opt
         */
        (outFolder: string|((file: string) => string), opt?: DestOptions): NodeJS.ReadWriteStream;
    }

    // taken from ../gulp/gulp.d.ts line 239
    interface DestOptions {
        /**
         * The output folder. Only has an effect if provided output folder is relative.
         * Default: process.cwd()
         */
        cwd?: string;

        /**
         * Octal permission string specifying mode for any folders that need to be created for output folder.
         * Default: 0777.
         */
        mode?: string;
    }

    export function init(opts?: InitOptions): NodeJS.ReadWriteStream;
    export function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream;
    export function write(opts?: WriteOptions): NodeJS.ReadWriteStream;
}