import { Compiler } from 'webpack';
export declare function genSiteEntry(): Promise<unknown>;
export declare class QuickCliSitePlugin {
    apply(compiler: Compiler): void;
}
