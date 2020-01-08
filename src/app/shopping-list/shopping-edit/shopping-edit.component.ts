import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  // if we sucribe we need to destory the subscription, otherwise memory will leak
  subscription: Subscription;
  editmode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
// @ViewChild('nameInput') nameInputRef: ElementRef; /**here #nameInput and #amountInput are localreferences. Instead of this
//  we can directly pass localreferences as parameters to OnAddItem() in this component html page
//  or we can use this viewchild approch  */
// @ViewChild('amountInput') amountInputRef: ElementRef;
// /**ingredientAdded = new EventEmitter<{name: string, amount: number}>();*/
// // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // it's listing the index from shopping-list component. to listen here we use subscribe
   this.subscription = this.slService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editmode = true;
        this.editedItem = this.slService.getingredient(index);
         this.slForm.setValue({
           name: this.editedItem.name,
          amount: this.editedItem.amount
         });
        // this.slForm.form.patchValue({
        //   name: this.editedItem.name,
        //   amount: this.editedItem.amount
        // });
        }
      );
      }

  onSubmit(form: NgForm) {
// const ingName = this.nameInputRef.nativeElement.value;
// const ingAmount = this.amountInputRef.nativeElement.value;
const values = form.value;
const newIngredient = new Ingredient(values.name, values.amount);
if (this.editmode) {
   this.slService.updateIngredient(this.editedItemIndex, newIngredient);
} else {
this.slService.addIngredient(newIngredient);
}
// this.ingredientAdded.emit(newIngredient);
this.editmode = false;
form.reset();
  }
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onClear() {
    this.slForm.reset();
    this.editmode = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
