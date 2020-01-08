import { PipeTransform, Pipe } from '@angular/core';
@Pipe(
{
name : 'shorten'  // this is the name to use it in Html page to apply this pipe
})
export class ShortenPipe implements PipeTransform {
  // here we take pipetransform interface to transform the value into shorten value.
  // after this we need to add this 'ShortenPipe' in declaration part of app.module.ts file to use in any html
transform(value: any, limit: number) {
  // here first parameter is actual string, second one is limit of data type number
  // we can give this as like this in html ' controlname| shorten:15 if we want to pass more parameters we have to add parameters here
  if (value.length > limit) {
    return value.substr(0, limit) + '...';
  }
  return value;
}
}
