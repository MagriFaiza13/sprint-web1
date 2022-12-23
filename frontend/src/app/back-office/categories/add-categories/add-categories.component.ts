import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategorieService} from '../../../services/categorie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  formCategorie: FormGroup

  constructor(private fb: FormBuilder,
              private router:Router,
              private categorieService: CategorieService) {
  }

  ngOnInit(): void {
    this.formCategorie = this.fb.group({
      nom: ['', [Validators.required]]
    })
  }

  addCategorie() {
    this.categorieService.addCategorie(this.formCategorie.value).subscribe(res => {
      console.log(res)
      this.router.navigateByUrl('/admin/list-categories')
    })
  }
}
