const phantom = require('phantom');

selector = require('./util/page-selector');
nfceGO = require('./nfce-go');
nfceDF = require('./nfce-df');
// nfceMS = require('nfce-ms');

module.exports = {
    nfceQuerySelector: function (state) {
        switch(state) {
            case "GO":
                return nfceGO.querySelector;
            case "DF":
                return nfceDF.querySelector;
            // case "MS":
            //     return nfceMS.nfceQuerySelector();
            default:
                return "Select a valid state of Brazil.";
        }
    },
    getNfce: function(url, nfceSelector) {
        return new Promise((resolve, reject) => {
            (async function() {
                const instance = await phantom.create();
                const page = await instance.createPage();
                await page.on("onResourceRequested", function(requestData) {
                    console.info('Requesting', requestData.url)
                });
                page.property('onConsoleMessage', function(msg) {
                    console.log(msg);
                });
                const status = await page.open(url);
                // console.log(status);
                const content = await page.property('content');
                // NFC-e
                var nfce = {};
                
                console.log("*****************");
                console.log("Query NFe");
                console.log("*****************");
                
                nfce.nfe = {};
                nfce.nfe.modelo               = await selector.queryInnerText(page, nfceSelector.nfe.modelo),
                nfce.nfe.serie                = await selector.queryInnerText(page, nfceSelector.nfe.serie),
                nfce.nfe.numero               = await selector.queryInnerText(page, nfceSelector.nfe.numero),
                nfce.nfe.dataEmissao          = await selector.queryInnerText(page, nfceSelector.nfe.dataEmissao),
                nfce.nfe.dataEntrada          = await selector.queryInnerText(page, nfceSelector.nfe.dataEntrada), // Not completed
                nfce.nfe.valor                = await selector.queryInnerText(page, nfceSelector.nfe.valor),
                nfce.nfe.cnpj                 = await selector.queryInnerText(page, nfceSelector.nfe.cnpj),
                nfce.nfe.nome                 = await selector.queryInnerText(page, nfceSelector.nfe.nome),
                nfce.nfe.inscricaoEstadual    = await selector.queryInnerText(page, nfceSelector.nfe.inscricaoEstadual),
                nfce.nfe.uf                   = await selector.queryInnerText(page, nfceSelector.nfe.uf),
                nfce.nfe.processo             = await selector.queryInnerText(page, nfceSelector.nfe.processo),
                nfce.nfe.processoVer          = await selector.queryInnerText(page, nfceSelector.nfe.processoVer),
                nfce.nfe.tipoEmissao          = await selector.queryInnerText(page, nfceSelector.nfe.tipoEmissao),
                nfce.nfe.finalidade           = await selector.queryInnerText(page, nfceSelector.nfe.finalidade),
                nfce.nfe.natureza             = await selector.queryInnerText(page, nfceSelector.nfe.natureza),
                nfce.nfe.tipoOperacao         = await selector.queryInnerText(page, nfceSelector.nfe.tipoOperacao),
                nfce.nfe.formaPagamento       = await selector.queryInnerText(page, nfceSelector.nfe.formaPagamento),
                nfce.nfe.digest               = await selector.queryInnerText(page, nfceSelector.nfe.digest),
                nfce.nfe.eventos              = await selector.queryInnerText(page, nfceSelector.nfe.eventos),
                nfce.nfe.protocolo            = await selector.queryInnerText(page, nfceSelector.nfe.protocolo),
                nfce.nfe.dataAutorizacao      = await selector.queryInnerText(page, nfceSelector.nfe.dataAutorizacao),
                nfce.nfe.dataInclusao         = await selector.queryInnerText(page, nfceSelector.nfe.dataInclusao) // Not completed

                console.log("*****************");
                console.log("Query PRODUCTS");
                console.log("*****************");
                
                nfce.produtos = await page.evaluate(function(s, nfceSelector, nfce) {
                    allProducts = [];
                    try {
                        var products = document.body.querySelectorAll(s);
                        if (products && products.length > 0) {
                            console.log(products.length + ' product(s) found');
                            for (var i = 2, len = products.length; i < len; (i = i+2)) {
                                var product = {};
                                product.descricao               = products[i].querySelector(nfceSelector.produtos.item.descricao);
                                product.descricao               = product.descricao ? product.descricao.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.quantidade              = products[i].querySelector(nfceSelector.produtos.item.quantidade);
                                product.quantidade              = product.quantidade ? product.quantidade.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.unidade                 = products[i].querySelector(nfceSelector.produtos.item.unidade);
                                product.unidade                 = product.unidade ? product.unidade.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.valor                   = products[i].querySelector(nfceSelector.produtos.item.valor);
                                product.valor                   = product.valor ? product.valor.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.codigo                  = products[i+1].querySelector(nfceSelector.produtos.item.codigo);
                                product.codigo                  = product.codigo ? product.codigo.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.codigoNCM               = products[i+1].querySelector(nfceSelector.produtos.item.codigoNCM);
                                product.codigoNCM               = product.codigoNCM ? product.codigoNCM.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.cfop                    = products[i+1].querySelector(nfceSelector.produtos.item.cfop);
                                product.cfop                    = product.cfop ? product.cfop.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.indicadorComposicao     = products[i+1].querySelector(nfceSelector.produtos.item.indicadorComposicao);
                                product.indicadorComposicao     = product.indicadorComposicao ? product.indicadorComposicao.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.codigoEANComercial      = products[i+1].querySelector(nfceSelector.produtos.item.codigoEANComercial);
                                product.codigoEANComercial      = product.codigoEANComercial ? product.codigoEANComercial.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.unidadeComercial        = products[i+1].querySelector(nfceSelector.produtos.item.unidadeComercial);
                                product.unidadeComercial        = product.unidadeComercial ? product.unidadeComercial.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.quantidadeComercial     = products[i+1].querySelector(nfceSelector.produtos.item.quantidadeComercial);
                                product.quantidadeComercial     = product.quantidadeComercial ? product.quantidadeComercial.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.codigoEANTributavel     = products[i+1].querySelector(nfceSelector.produtos.item.codigoEANTributavel);
                                product.codigoEANTributavel     = product.codigoEANTributavel ? product.codigoEANTributavel.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.unidadeTributavel       = products[i+1].querySelector(nfceSelector.produtos.item.unidadeTributavel);
                                product.unidadeTributavel       = product.unidadeTributavel ? product.unidadeTributavel.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.quantidadeTributavel    = products[i+1].querySelector(nfceSelector.produtos.item.quantidadeTributavel);
                                product.quantidadeTributavel    = product.quantidadeTributavel ? product.quantidadeTributavel.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.valorUnitarioComercial  = products[i+1].querySelector(nfceSelector.produtos.item.valorUnitarioComercial);
                                product.valorUnitarioComercial  = product.valorUnitarioComercial ? product.valorUnitarioComercial.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.valorUnitarioTributavel = products[i+1].querySelector(nfceSelector.produtos.item.valorUnitarioTributavel);
                                product.valorUnitarioTributavel = product.valorUnitarioTributavel ? product.valorUnitarioTributavel.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.valorAproxTributos      = products[i+1].querySelector(nfceSelector.produtos.item.valorAproxTributos);
                                product.valorAproxTributos      = product.valorAproxTributos ? product.valorAproxTributos.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.origemMercadoria        = products[i+1].querySelector(nfceSelector.produtos.item.origemMercadoria);
                                product.origemMercadoria        = product.origemMercadoria ? product.origemMercadoria.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.tributacaoICMS          = products[i+1].querySelector(nfceSelector.produtos.item.tributacaoICMS);
                                product.tributacaoICMS          = product.tributacaoICMS ? product.tributacaoICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.modalidadeICMS          = products[i+1].querySelector(nfceSelector.produtos.item.modalidadeICMS);
                                product.modalidadeICMS          = product.modalidadeICMS ? product.modalidadeICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.baseCalculoICMS         = products[i+1].querySelector(nfceSelector.produtos.item.baseCalculoICMS);
                                product.baseCalculoICMS         = product.baseCalculoICMS ? product.baseCalculoICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.aliquotaICMS            = products[i+1].querySelector(nfceSelector.produtos.item.aliquotaICMS);
                                product.aliquotaICMS            = product.aliquotaICMS ? product.aliquotaICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.valorICMS               = products[i+1].querySelector(nfceSelector.produtos.item.valorICMS);
                                product.valorICMS               = product.valorICMS ? product.valorICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.pisCST                  = products[i+1].querySelector(nfceSelector.produtos.item.pisCST);
                                product.pisCST                  = product.pisCST ? product.pisCST.innerText.replace(/\s+/g, ' ').trim() : null;
                                product.confinsCST              = products[i+1].querySelector(nfceSelector.produtos.item.confinsCST);
                                product.confinsCST              = product.confinsCST ? product.confinsCST.innerText.replace(/\s+/g, ' ').trim() : null;

                                allProducts.push(product);
                            }
                            return allProducts;
                        }
                    } catch (ex) {
                        console.log("ERROR", ex);
                        return [];
                    }                    
                }, nfceSelector.produtos.list, nfceSelector);

                console.log("*****************");
                console.log("Query Emitente");
                console.log("*****************");
                
                nfce.emitente = {};
                nfce.emitente.nome                   = await selector.queryInnerText(page, nfceSelector.emitente.nome);
                nfce.emitente.nome                   = nfce.emitente.nome ? nfce.emitente.nome.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.nomeFantasia           = await selector.queryInnerText(page, nfceSelector.emitente.nomeFantasia);
                nfce.emitente.nomeFantasia           = nfce.emitente.nomeFantasia ? nfce.emitente.nomeFantasia.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.cnpj                   = await selector.queryInnerText(page, nfceSelector.emitente.cnpj);
                nfce.emitente.cnpj                   = nfce.emitente.cnpj ? nfce.emitente.cnpj.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.endereco               = await selector.queryInnerText(page, nfceSelector.emitente.endereco);
                nfce.emitente.endereco               = nfce.emitente.endereco ? nfce.emitente.endereco.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.bairro                 = await selector.queryInnerText(page, nfceSelector.emitente.bairro);
                nfce.emitente.bairro                 = nfce.emitente.bairro ? nfce.emitente.bairro.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.cep                    = await selector.queryInnerText(page, nfceSelector.emitente.cep);
                nfce.emitente.cep                    = nfce.emitente.cep ? nfce.emitente.cep.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.cidade                 = await selector.queryInnerText(page, nfceSelector.emitente.cidade);
                nfce.emitente.cidade                 = nfce.emitente.cidade ? nfce.emitente.cidade.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.telefone               = await selector.queryInnerText(page, nfceSelector.emitente.telefone);
                nfce.emitente.telefone               = nfce.emitente.telefone ? nfce.emitente.telefone.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.uf                     = await selector.queryInnerText(page, nfceSelector.emitente.uf);
                nfce.emitente.uf                     = nfce.emitente.uf ? nfce.emitente.uf.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.pais                   = await selector.queryInnerText(page, nfceSelector.emitente.pais);
                nfce.emitente.pais                   = nfce.emitente.pais ? nfce.emitente.pais.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.inscricaoEstadual      = await selector.queryInnerText(page, nfceSelector.emitente.inscricaoEstadual);
                nfce.emitente.inscricaoEstadual      = nfce.emitente.inscricaoEstadual ? nfce.emitente.inscricaoEstadual.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.inscricaoEstadualSubs  = await selector.queryInnerText(page, nfceSelector.emitente.inscricaoEstadualSubs);
                nfce.emitente.inscricaoEstadualSubs  = nfce.emitente.inscricaoEstadualSubs ? nfce.emitente.inscricaoEstadualSubs.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.inscricaoMunicipal     = await selector.queryInnerText(page, nfceSelector.emitente.inscricaoMunicipal);
                nfce.emitente.inscricaoMunicipal     = nfce.emitente.inscricaoMunicipal ? nfce.emitente.inscricaoMunicipal.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.municipioICMS          = await selector.queryInnerText(page, nfceSelector.emitente.municipioICMS);
                nfce.emitente.municipioICMS          = nfce.emitente.municipioICMS ? nfce.emitente.municipioICMS.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.cnae                   = await selector.queryInnerText(page, nfceSelector.emitente.cnae);
                nfce.emitente.cnae                   = nfce.emitente.cnae ? nfce.emitente.cnae.replace(/\s+/g, ' ').trim() : null;
                nfce.emitente.codigoRegimeTributario = await selector.queryInnerText(page, nfceSelector.emitente.codigoRegimeTributario);
                nfce.emitente.codigoRegimeTributario = nfce.emitente.codigoRegimeTributario ? nfce.emitente.codigoRegimeTributario.replace(/\s+/g, ' ').trim() : null;
                
                console.log(JSON.stringify(nfce.emitente));

                instance.exit();
                resolve(nfce);
            }());
        });
    }
}