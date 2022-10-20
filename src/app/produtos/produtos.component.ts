import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto [] | undefined;
  

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
    const descricao = params.get("descricao")?.toLowerCase();

    if (descricao){
      this.produtos = produtos.filter(produtos => produtos.descricao.toLowerCase().includes(descricao));
      return;
    }
    this.produtos = produtos;
    })
    this.produtos = this.produtosService.getAll();
  }
  


  

}
