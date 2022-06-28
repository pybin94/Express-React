 import fs from 'fs';
 import {join} from 'path';
 
 const mkdirs = (target, permission='0755') => {
     if (target == undefined || target == null) { return; }
 
     target = target.replace(/\\/gi, "/");
 
     const target_list = target.split("/");
 
     let dir = '';
 
     if (target.substring(0, 1) == "/") {
         dir = "/";
     }
 
     if (target_list[0].indexOf(":") > -1) {
         target_list[0] += "/"
     }
 
     target_list.map((v, i) => {
         dir = join(dir, v);
 
         if (v == ".") {
             return;
         }
 
         if (!fs.existsSync(dir)) {
             fs.mkdirSync(dir);
             fs.chmodSync(dir, permission);
         }
     });
 };
 
 export {mkdirs}