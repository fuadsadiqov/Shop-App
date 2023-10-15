import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'
})
export class ShopComponent implements OnInit{

  ngOnInit(){
    this.add_chatinline();  
  }
    
  add_chatinline() {
    let hccid = 98371624;
    let nt = document.createElement("script");
    nt.async = true;
    nt.src = "https://mylivechat.com/chatinline.aspx?hccid=" + hccid;
    let ct: any = document.getElementsByTagName("script")[0];
    
    ct.parentNode.insertBefore(nt, ct);
  }
}