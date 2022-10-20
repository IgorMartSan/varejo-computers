import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  Soma: number = 0;

  itensCarrinho: IProdutoCarrinho [] = [];

  constructor(protected carrinhoService: CarrinhoService,
    private router:Router ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  
  }

  
  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
  }

  soma():number{
    this.itensCarrinho
    let soma = this.itensCarrinho.reduce((antes,depois) => antes + (depois.preco * depois.quantidade) ,0);
    return soma;
  }
  comprar(){
    alert("Parabéns, você finalizou a compra");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }


}
