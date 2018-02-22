import { Injectable } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { Http, Headers, Response ,BaseRequestOptions} from '@angular/http';

@Injectable()
export class FileuploadService extends BaseRequestOptions{
 errors: Array<string> =[];
 @Input() fileExt: string = "JPG, GIF, PNG, PDF, DOCX, DOC, XLSX, XLS";
  @Input() maxFiles: number = 5;
  @Input() maxSize: number = 5; // 5MB
  @Output() uploadStatus = new EventEmitter();
  constructor() { super();}

  public isValidFiles(files){
     // Check Number of files
      if (files.length > this.maxFiles) {
          return this.errors.push("Error: At a time you can upload only " + this.maxFiles + " files");
          
      }        
      this.isValidFileExtension(files);
      return this.errors.length === 0;
    }
    public isValidFileExtension(files){
      // Make array of file extensions
      var extensions = (this.fileExt.split(','))
                      .map(function (x) { return x.toLocaleUpperCase().trim() });
      for (var i = 0; i < files.length; i++) {
          // Get file extension
          var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
          // Check the extension exists
          var exists = extensions.includes(ext);
          if (!exists) {
              this.errors.push("Error (Extension): " + files[i].name);
          }
          // Check file size
          this.isValidFileSize(files[i]);
      }
    }

    public isValidFileSize(file) {
          var fileSizeinMB = file.size / (1024 * 1000);
          var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
          if (size > this.maxSize)
              this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + this.maxSize + "MB ( " + size + "MB )");
    }

}
