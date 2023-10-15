import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryRepository } from 'src/app/model/category.repository';
import { PostService } from 'src/app/model/post.service';
import { TokenService } from 'src/app/model/token.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit{

  selectedFile: File | null = null;
  imageUrl: string | null = null;
  constructor(private fb: FormBuilder, private categoryService: CategoryRepository, private postService: PostService, private tokenService: TokenService){}
  
  postForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    imageUrl: ['kartof.jpg', Validators.required],
    price: ['', Validators.required],
    userId: ['1', Validators.required],
    category_id: ['', Validators.required],
    address: ['', Validators.required]
  })
  
  ngOnInit(): void {
    this.userData;
  }
  getCategories(){
    return this.categoryService.getCategories()
  }

  get userData(){
    return this.tokenService.getUser();
  }

  submit(){
    const newItemObj = this.postForm.value;
    newItemObj['userData'] = this.userData;
    newItemObj['category_id'] = Number(newItemObj['category_id']);
    
    if(this.postForm.valid){
      this.postService.addPost(newItemObj)
      .subscribe(res => console.log(res));
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedFile);
    this.postService.uploadFile(formData)
    .subscribe(
      (response) => {
        console.log(response);
        
        this.imageUrl = response.url;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}