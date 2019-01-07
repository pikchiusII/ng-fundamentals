import { InjectionToken } from '@angular/core'

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr {
    success (msg: string, tirle?: string): void;
    info (msg: string, tirle?: string): void;
    warning (msg: string, tirle?: string): void;
    error (msg: string, tirle?: string): void;
}