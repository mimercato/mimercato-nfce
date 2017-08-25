
selector = require('../util/page-selector');
const querySelector = require('../query/query-rs').querySelector;
const content = require('../content/content-rs');

exports.content = function(url, page) {
    return content.getContent(url, page);
}

exports.geral = function(page) {
    return new Promise((resolve, reject) => {
        (async function() {
            geral = {};
            geral.chaveNFe  = await selector.queryInnerText(page, querySelector.chaveNFe);
            geral.chaveNFe  = geral.chaveNFe ? geral.chaveNFe.replace(/\s+/g, ' ').trim() : null;
            geral.numero    = await selector.queryInnerText(page, querySelector.numero);
            geral.numero    = geral.numero ? geral.numero.replace(/\s+/g, ' ').trim() : null;
            geral.versaoXML = await selector.queryInnerText(page, querySelector.versaoXML);
            geral.versaoXML = geral.versaoXML ? geral.versaoXML.replace(/\s+/g, ' ').trim() : null;
            resolve(geral)
        }());
    });
}

exports.nfe = function(page) {
    return new Promise((resolve, reject) => {
        (async function() {
            nfe = {};
            nfe.modelo            = await selector.queryInnerText(page, querySelector.nfe.modelo),
            nfe.modelo            = nfe.modelo ? nfe.modelo.replace(/\s+/g, ' ').trim() : null;
            nfe.serie             = await selector.queryInnerText(page, querySelector.nfe.serie),
            nfe.serie             = nfe.serie ? nfe.serie.replace(/\s+/g, ' ').trim() : null;
            nfe.numero            = await selector.queryInnerText(page, querySelector.nfe.numero),
            nfe.numero            = nfe.numero ? nfe.numero.replace(/\s+/g, ' ').trim() : null;
            nfe.dataEmissao       = await selector.queryInnerText(page, querySelector.nfe.dataEmissao),
            nfe.dataEmissao       = nfe.dataEmissao ? nfe.dataEmissao.replace(/\s+/g, ' ').trim() : null;
            nfe.dataEntrada       = await selector.queryInnerText(page, querySelector.nfe.dataEntrada), // Not completed
            nfe.dataEntrada       = nfe.dataEntrada ? nfe.dataEntrada.replace(/\s+/g, ' ').trim() : null;
            nfe.valor             = await selector.queryInnerText(page, querySelector.nfe.valor),
            nfe.valor             = nfe.valor ? nfe.valor.replace(/\s+/g, ' ').trim() : null;
            nfe.cnpj              = await selector.queryInnerText(page, querySelector.nfe.cnpj),
            nfe.cnpj              = nfe.cnpj ? nfe.cnpj.replace(/\s+/g, ' ').trim() : null;
            nfe.nome              = await selector.queryInnerText(page, querySelector.nfe.nome),
            nfe.nome              = nfe.nome ? nfe.nome.replace(/\s+/g, ' ').trim() : null;
            nfe.inscricaoEstadual = await selector.queryInnerText(page, querySelector.nfe.inscricaoEstadual),
            nfe.inscricaoEstadual = nfe.inscricaoEstadual ? nfe.inscricaoEstadual.replace(/\s+/g, ' ').trim() : null;
            nfe.uf                = await selector.queryInnerText(page, querySelector.nfe.uf),
            nfe.uf                = nfe.uf ? nfe.uf.replace(/\s+/g, ' ').trim() : null;
            nfe.processo          = await selector.queryInnerText(page, querySelector.nfe.processo),
            nfe.processo          = nfe.processo ? nfe.processo.replace(/\s+/g, ' ').trim() : null;
            nfe.processoVer       = await selector.queryInnerText(page, querySelector.nfe.processoVer),
            nfe.processoVer       = nfe.processoVer ? nfe.processoVer.replace(/\s+/g, ' ').trim() : null;
            nfe.tipoEmissao       = await selector.queryInnerText(page, querySelector.nfe.tipoEmissao),
            nfe.tipoEmissao       = nfe.tipoEmissao ? nfe.tipoEmissao.replace(/\s+/g, ' ').trim() : null;
            nfe.finalidade        = await selector.queryInnerText(page, querySelector.nfe.finalidade),
            nfe.finalidade        = nfe.finalidade ? nfe.finalidade.replace(/\s+/g, ' ').trim() : null;
            nfe.natureza          = await selector.queryInnerText(page, querySelector.nfe.natureza),
            nfe.natureza          = nfe.natureza ? nfe.natureza.replace(/\s+/g, ' ').trim() : null;
            nfe.tipoOperacao      = await selector.queryInnerText(page, querySelector.nfe.tipoOperacao),
            nfe.tipoOperacao      = nfe.tipoOperacao ? nfe.tipoOperacao.replace(/\s+/g, ' ').trim() : null;
            nfe.formaPagamento    = await selector.queryInnerText(page, querySelector.nfe.formaPagamento),
            nfe.formaPagamento    = nfe.formaPagamento ? nfe.formaPagamento.replace(/\s+/g, ' ').trim() : null;
            nfe.digest            = await selector.queryInnerText(page, querySelector.nfe.digest),
            nfe.digest            = nfe.digest ? nfe.digest.replace(/\s+/g, ' ').trim() : null;
            nfe.eventos           = await selector.queryInnerText(page, querySelector.nfe.eventos),
            nfe.eventos           = nfe.eventos ? nfe.eventos.replace(/\s+/g, ' ').trim() : null;
            nfe.protocolo         = await selector.queryInnerText(page, querySelector.nfe.protocolo),
            nfe.protocolo         = nfe.protocolo ? nfe.protocolo.replace(/\s+/g, ' ').trim() : null;
            nfe.dataAutorizacao   = await selector.queryInnerText(page, querySelector.nfe.dataAutorizacao),
            nfe.dataAutorizacao   = nfe.dataAutorizacao ? nfe.dataAutorizacao.replace(/\s+/g, ' ').trim() : null;
            nfe.dataInclusao      = await selector.queryInnerText(page, querySelector.nfe.dataInclusao)
            nfe.dataInclusao      = nfe.dataInclusao ? nfe.dataInclusao.replace(/\s+/g, ' ').trim() : null;
            resolve(nfe);
        }());        
    });
};

exports.emitente = function(page) {
    return new Promise((resolve, reject) => {
        (async function() {
            emitente = {};
            emitente.nome                   = await selector.queryInnerText(page, querySelector.emitente.nome);
            emitente.nome                   = emitente.nome ? emitente.nome.replace(/\s+/g, ' ').trim() : null;
            emitente.nomeFantasia           = await selector.queryInnerText(page, querySelector.emitente.nomeFantasia);
            emitente.nomeFantasia           = emitente.nomeFantasia ? emitente.nomeFantasia.replace(/\s+/g, ' ').trim() : null;
            emitente.cnpj                   = await selector.queryInnerText(page, querySelector.emitente.cnpj);
            emitente.cnpj                   = emitente.cnpj ? emitente.cnpj.replace(/\s+/g, ' ').trim() : null;
            emitente.endereco               = await selector.queryInnerText(page, querySelector.emitente.endereco);
            emitente.endereco               = emitente.endereco ? emitente.endereco.replace(/\s+/g, ' ').trim() : null;
            emitente.bairro                 = await selector.queryInnerText(page, querySelector.emitente.bairro);
            emitente.bairro                 = emitente.bairro ? emitente.bairro.replace(/\s+/g, ' ').trim() : null;
            emitente.cep                    = await selector.queryInnerText(page, querySelector.emitente.cep);
            emitente.cep                    = emitente.cep ? emitente.cep.replace(/\s+/g, ' ').trim() : null;
            emitente.cidade                 = await selector.queryInnerText(page, querySelector.emitente.cidade);
            emitente.cidade                 = emitente.cidade ? emitente.cidade.replace(/\s+/g, ' ').trim() : null;
            emitente.telefone               = await selector.queryInnerText(page, querySelector.emitente.telefone);
            emitente.telefone               = emitente.telefone ? emitente.telefone.replace(/\s+/g, ' ').trim() : null;
            emitente.uf                     = await selector.queryInnerText(page, querySelector.emitente.uf);
            emitente.uf                     = emitente.uf ? emitente.uf.replace(/\s+/g, ' ').trim() : null;
            emitente.pais                   = await selector.queryInnerText(page, querySelector.emitente.pais);
            emitente.pais                   = emitente.pais ? emitente.pais.replace(/\s+/g, ' ').trim() : null;
            emitente.inscricaoEstadual      = await selector.queryInnerText(page, querySelector.emitente.inscricaoEstadual);
            emitente.inscricaoEstadual      = emitente.inscricaoEstadual ? emitente.inscricaoEstadual.replace(/\s+/g, ' ').trim() : null;
            emitente.inscricaoEstadualSubs  = await selector.queryInnerText(page, querySelector.emitente.inscricaoEstadualSubs);
            emitente.inscricaoEstadualSubs  = emitente.inscricaoEstadualSubs ? emitente.inscricaoEstadualSubs.replace(/\s+/g, ' ').trim() : null;
            emitente.inscricaoMunicipal     = await selector.queryInnerText(page, querySelector.emitente.inscricaoMunicipal);
            emitente.inscricaoMunicipal     = emitente.inscricaoMunicipal ? emitente.inscricaoMunicipal.replace(/\s+/g, ' ').trim() : null;
            emitente.municipioICMS          = await selector.queryInnerText(page, querySelector.emitente.municipioICMS);
            emitente.municipioICMS          = emitente.municipioICMS ? emitente.municipioICMS.replace(/\s+/g, ' ').trim() : null;
            emitente.cnae                   = await selector.queryInnerText(page, querySelector.emitente.cnae);
            emitente.cnae                   = emitente.cnae ? emitente.cnae.replace(/\s+/g, ' ').trim() : null;
            emitente.codigoRegimeTributario = await selector.queryInnerText(page, querySelector.emitente.codigoRegimeTributario);
            emitente.codigoRegimeTributario = emitente.codigoRegimeTributario ? emitente.codigoRegimeTributario.replace(/\s+/g, ' ').trim() : null;
            resolve(emitente);
        }());        
    });
};

exports.destinatario = function(page) {
    return new Promise((resolve, reject) => {
        (async function() {
            destinatario = {};
            destinatario.nome              = await selector.queryInnerText(page, querySelector.destinatario.nome);
            destinatario.nome              = destinatario.nome ? destinatario.nome.replace(/\s+/g, ' ').trim() : null;
            destinatario.cnpj_cpf          = await selector.queryInnerText(page, querySelector.destinatario.cnpj_cpf);
            destinatario.cnpj_cpf          = destinatario.cnpj_cpf ? destinatario.cnpj_cpf.replace(/\s+/g, ' ').trim() : null;
            destinatario.endereco          = await selector.queryInnerText(page, querySelector.destinatario.endereco);
            destinatario.endereco          = destinatario.endereco ? destinatario.endereco.replace(/\s+/g, ' ').trim() : null;
            destinatario.bairro            = await selector.queryInnerText(page, querySelector.destinatario.bairro);
            destinatario.bairro            = destinatario.bairro ? destinatario.bairro.replace(/\s+/g, ' ').trim() : null;
            destinatario.cep               = await selector.queryInnerText(page, querySelector.destinatario.cep);
            destinatario.cep               = destinatario.cep ? destinatario.cep.replace(/\s+/g, ' ').trim() : null;
            destinatario.cidade            = await selector.queryInnerText(page, querySelector.destinatario.cidade);
            destinatario.cidade            = destinatario.cidade ? destinatario.cidade.replace(/\s+/g, ' ').trim() : null;
            destinatario.telefone          = await selector.queryInnerText(page, querySelector.destinatario.telefone);
            destinatario.telefone          = destinatario.telefone ? destinatario.telefone.replace(/\s+/g, ' ').trim() : null;
            destinatario.uf                = await selector.queryInnerText(page, querySelector.destinatario.uf);
            destinatario.uf                = destinatario.uf ? destinatario.uf.replace(/\s+/g, ' ').trim() : null;
            destinatario.pais              = await selector.queryInnerText(page, querySelector.destinatario.pais);
            destinatario.pais              = destinatario.pais ? destinatario.pais.replace(/\s+/g, ' ').trim() : null;
            destinatario.indicadorIE       = await selector.queryInnerText(page, querySelector.destinatario.indicadorIE);
            destinatario.indicadorIE       = destinatario.indicadorIE ? destinatario.indicadorIE.replace(/\s+/g, ' ').trim() : null;
            destinatario.inscricaoEstadual = await selector.queryInnerText(page, querySelector.destinatario.inscricaoEstadual);
            destinatario.inscricaoEstadual = destinatario.inscricaoEstadual ? destinatario.inscricaoEstadual.replace(/\s+/g, ' ').trim() : null;
            destinatario.inscricaoSuframa  = await selector.queryInnerText(page, querySelector.destinatario.inscricaoSuframa);
            destinatario.inscricaoSuframa  = destinatario.inscricaoSuframa ? destinatario.inscricaoSuframa.replace(/\s+/g, ' ').trim() : null;
            destinatario.im                = await selector.queryInnerText(page, querySelector.destinatario.im);
            destinatario.im                = destinatario.im ? destinatario.im.replace(/\s+/g, ' ').trim() : null;
            destinatario.email             = await selector.queryInnerText(page, querySelector.destinatario.email);
            destinatario.email             = destinatario.email ? destinatario.email.replace(/\s+/g, ' ').trim() : null;
            resolve(destinatario);
        }());
    });
}

exports.impostos = function(page) {
    return new Promise((resolve, reject) => {
        (async function() {
            impostos = {};
            impostos.baseICMS           = await selector.queryInnerText(page, querySelector.impostos.baseICMS);
            impostos.baseICMS           = impostos.baseICMS ? impostos.baseICMS.replace(/\s+/g, ' ').trim() : null;
            impostos.icmsValor          = await selector.queryInnerText(page, querySelector.impostos.icmsValor);
            impostos.icmsValor          = impostos.icmsValor ? impostos.icmsValor.replace(/\s+/g, ' ').trim() : null;
            impostos.icmsDesonerado     = await selector.queryInnerText(page, querySelector.impostos.icmsDesonerado);
            impostos.icmsDesonerado     = impostos.icmsDesonerado ? impostos.icmsDesonerado.replace(/\s+/g, ' ').trim() : null;
            impostos.icmsST             = await selector.queryInnerText(page, querySelector.impostos.icmsST);
            impostos.icmsST             = impostos.icmsST ? impostos.icmsST.replace(/\s+/g, ' ').trim() : null;
            impostos.icmsSubs           = await selector.queryInnerText(page, querySelector.impostos.icmsSubs);
            impostos.icmsSubs           = impostos.icmsSubs ? impostos.icmsSubs.replace(/\s+/g, ' ').trim() : null;
            impostos.totalProdutos      = await selector.queryInnerText(page, querySelector.impostos.totalProdutos);
            impostos.totalProdutos      = impostos.totalProdutos ? impostos.totalProdutos.replace(/\s+/g, ' ').trim() : null;
            impostos.totalFrete         = await selector.queryInnerText(page, querySelector.impostos.totalFrete);
            impostos.totalFrete         = impostos.totalFrete ? impostos.totalFrete.replace(/\s+/g, ' ').trim() : null;
            impostos.totalSeguro        = await selector.queryInnerText(page, querySelector.impostos.totalSeguro);
            impostos.totalSeguro        = impostos.totalSeguro ? impostos.totalSeguro.replace(/\s+/g, ' ').trim() : null;
            impostos.despesasAcessorias = await selector.queryInnerText(page, querySelector.impostos.despesasAcessorias);
            impostos.despesasAcessorias = impostos.despesasAcessorias ? impostos.despesasAcessorias.replace(/\s+/g, ' ').trim() : null;
            impostos.totalIPI           = await selector.queryInnerText(page, querySelector.impostos.totalIPI);
            impostos.totalIPI           = impostos.totalIPI ? impostos.totalIPI.replace(/\s+/g, ' ').trim() : null;
            impostos.totalNFE           = await selector.queryInnerText(page, querySelector.impostos.totalNFE);
            impostos.totalNFE           = impostos.totalNFE ? impostos.totalNFE.replace(/\s+/g, ' ').trim() : null;
            impostos.totalDescontos     = await selector.queryInnerText(page, querySelector.impostos.totalDescontos);
            impostos.totalDescontos     = impostos.totalDescontos ? impostos.totalDescontos.replace(/\s+/g, ' ').trim() : null;
            impostos.totalII            = await selector.queryInnerText(page, querySelector.impostos.totalII);
            impostos.totalII            = impostos.totalII ? impostos.totalII.replace(/\s+/g, ' ').trim() : null;
            impostos.pis                = await selector.queryInnerText(page, querySelector.impostos.pis);
            impostos.pis                = impostos.pis ? impostos.pis.replace(/\s+/g, ' ').trim() : null;
            impostos.cofins             = await selector.queryInnerText(page, querySelector.impostos.cofins);
            impostos.cofins             = impostos.cofins ? impostos.cofins.replace(/\s+/g, ' ').trim() : null;
            impostos.tributosAprox      = await selector.queryInnerText(page, querySelector.impostos.tributosAprox);
            impostos.tributosAprox      = impostos.tributosAprox ? impostos.tributosAprox.replace(/\s+/g, ' ').trim() : null;
            impostos.icmsFCP            = await selector.queryInnerText(page, querySelector.impostos.icmsFCP);
            impostos.icmsFCP            = impostos.icmsFCP ? impostos.icmsFCP.replace(/\s+/g, ' ').trim() : null;
            impostos.icmsIntUfDest      = await selector.queryInnerText(page, querySelector.impostos.icmsIntUfDest);
            impostos.icmsIntUfDest      = impostos.icmsIntUfDest ? impostos.icmsIntUfDest.replace(/\s+/g, ' ').trim() : null;
            impostos.icmsIntUfremet     = await selector.queryInnerText(page, querySelector.impostos.icmsIntUfremet);
            impostos.icmsIntUfremet     = impostos.icmsIntUfremet ? impostos.icmsIntUfremet.replace(/\s+/g, ' ').trim() : null;
            resolve(impostos);
        }());        
    });
};

exports.transporte = function(page) {
    return new Promise((resolve, reject) => {
        (async function() {
            transporte = {};
            transporte.modalidade = await selector.queryInnerText(page, querySelector.transporte.modalidade);
            transporte.modalidade = transporte.modalidade ? transporte.modalidade.replace(/\s+/g, ' ').trim() : null;
            resolve(transporte);
        }());        
    });
};

exports.cobranca = function(page) {
    return new Promise((resolve, reject) => {
        (async function() {
            cobranca = {};
            cobranca.forma          = await selector.queryInnerText(page, querySelector.cobranca.forma);
            cobranca.forma          = cobranca.forma ? cobranca.forma.replace(/\s+/g, ' ').trim() : null;
            cobranca.valor          = await selector.queryInnerText(page, querySelector.cobranca.valor);
            cobranca.valor          = cobranca.valor ? cobranca.valor.replace(/\s+/g, ' ').trim() : null;
            cobranca.cnpjCred       = await selector.queryInnerText(page, querySelector.cobranca.cnpjCred);
            cobranca.cnpjCred       = cobranca.cnpjCred ? cobranca.cnpjCred.replace(/\s+/g, ' ').trim() : null;
            cobranca.bandeira       = await selector.queryInnerText(page, querySelector.cobranca.bandeira);
            cobranca.bandeira       = cobranca.bandeira ? cobranca.bandeira.replace(/\s+/g, ' ').trim() : null;
            cobranca.autorizacao    = await selector.queryInnerText(page, querySelector.cobranca.autorizacao);
            cobranca.autorizacao    = cobranca.autorizacao ? cobranca.autorizacao.replace(/\s+/g, ' ').trim() : null;
            cobranca.tipoIntegracao = await selector.queryInnerText(page, querySelector.cobranca.tipoIntegracao);
            cobranca.tipoIntegracao = cobranca.tipoIntegracao ? cobranca.tipoIntegracao.replace(/\s+/g, ' ').trim() : null;
            resolve(cobranca);
        }());        
    });
};

exports.info = function(page) {
    return new Promise((resolve, reject) => {
        (async function() {
            info = {};
            info.formatoImpressao = await selector.queryInnerText(page, querySelector.info.formatoImpressao);
            info.formatoImpressao = info.formatoImpressao ? info.formatoImpressao.replace(/\s+/g, ' ').trim() : null;
            info.qrcode           = await selector.queryInnerText(page, querySelector.info.qrcode);
            info.qrcode           = info.qrcode ? info.qrcode.replace(/\s+/g, ' ').trim() : null;            
            info.descricao        = await selector.queryInnerText(page, querySelector.info.descricao);
            info.descricao        = info.descricao ? info.descricao.replace(/\s+/g, ' ').trim() : null;            
            resolve(info);
        }());        
    });
};

exports.produtos = function(page) {
    return new Promise((resolve, reject) => {
        (async function() {
            produtos = await page.evaluate(function(querySelector) {
                allProducts = [];
                try {
                    var products = document.body.querySelectorAll(querySelector.produtos.list);
                    if (products && products.length > 0) {
                        console.log(products.length + ' product(s) found');
                        for (var i = 2, len = products.length; i < len; (i = i+2)) {
                            var product = {};
                            product.descricao               = products[i].querySelector(querySelector.produtos.item.descricao);
                            product.descricao               = product.descricao ? product.descricao.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.quantidade              = products[i].querySelector(querySelector.produtos.item.quantidade);
                            product.quantidade              = product.quantidade ? product.quantidade.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.unidade                 = products[i].querySelector(querySelector.produtos.item.unidade);
                            product.unidade                 = product.unidade ? product.unidade.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.valor                   = products[i].querySelector(querySelector.produtos.item.valor);
                            product.valor                   = product.valor ? product.valor.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.codigo                  = products[i+1].querySelector(querySelector.produtos.item.codigo);
                            product.codigo                  = product.codigo ? product.codigo.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.codigoNCM               = products[i+1].querySelector(querySelector.produtos.item.codigoNCM);
                            product.codigoNCM               = product.codigoNCM ? product.codigoNCM.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.cfop                    = products[i+1].querySelector(querySelector.produtos.item.cfop);
                            product.cfop                    = product.cfop ? product.cfop.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.indicadorComposicao     = products[i+1].querySelector(querySelector.produtos.item.indicadorComposicao);
                            product.indicadorComposicao     = product.indicadorComposicao ? product.indicadorComposicao.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.codigoEANComercial      = products[i+1].querySelector(querySelector.produtos.item.codigoEANComercial);
                            product.codigoEANComercial      = product.codigoEANComercial ? product.codigoEANComercial.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.unidadeComercial        = products[i+1].querySelector(querySelector.produtos.item.unidadeComercial);
                            product.unidadeComercial        = product.unidadeComercial ? product.unidadeComercial.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.quantidadeComercial     = products[i+1].querySelector(querySelector.produtos.item.quantidadeComercial);
                            product.quantidadeComercial     = product.quantidadeComercial ? product.quantidadeComercial.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.codigoEANTributavel     = products[i+1].querySelector(querySelector.produtos.item.codigoEANTributavel);
                            product.codigoEANTributavel     = product.codigoEANTributavel ? product.codigoEANTributavel.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.unidadeTributavel       = products[i+1].querySelector(querySelector.produtos.item.unidadeTributavel);
                            product.unidadeTributavel       = product.unidadeTributavel ? product.unidadeTributavel.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.quantidadeTributavel    = products[i+1].querySelector(querySelector.produtos.item.quantidadeTributavel);
                            product.quantidadeTributavel    = product.quantidadeTributavel ? product.quantidadeTributavel.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.valorUnitarioComercial  = products[i+1].querySelector(querySelector.produtos.item.valorUnitarioComercial);
                            product.valorUnitarioComercial  = product.valorUnitarioComercial ? product.valorUnitarioComercial.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.valorUnitarioTributavel = products[i+1].querySelector(querySelector.produtos.item.valorUnitarioTributavel);
                            product.valorUnitarioTributavel = product.valorUnitarioTributavel ? product.valorUnitarioTributavel.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.valorAproxTributos      = products[i+1].querySelector(querySelector.produtos.item.valorAproxTributos);
                            product.valorAproxTributos      = product.valorAproxTributos ? product.valorAproxTributos.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.origemMercadoria        = products[i+1].querySelector(querySelector.produtos.item.origemMercadoria);
                            product.origemMercadoria        = product.origemMercadoria ? product.origemMercadoria.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.tributacaoICMS          = products[i+1].querySelector(querySelector.produtos.item.tributacaoICMS);
                            product.tributacaoICMS          = product.tributacaoICMS ? product.tributacaoICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.modalidadeICMS          = products[i+1].querySelector(querySelector.produtos.item.modalidadeICMS);
                            product.modalidadeICMS          = product.modalidadeICMS ? product.modalidadeICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.baseCalculoICMS         = products[i+1].querySelector(querySelector.produtos.item.baseCalculoICMS);
                            product.baseCalculoICMS         = product.baseCalculoICMS ? product.baseCalculoICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.aliquotaICMS            = products[i+1].querySelector(querySelector.produtos.item.aliquotaICMS);
                            product.aliquotaICMS            = product.aliquotaICMS ? product.aliquotaICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.valorICMS               = products[i+1].querySelector(querySelector.produtos.item.valorICMS);
                            product.valorICMS               = product.valorICMS ? product.valorICMS.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.pisCST                  = products[i+1].querySelector(querySelector.produtos.item.pisCST);
                            product.pisCST                  = product.pisCST ? product.pisCST.innerText.replace(/\s+/g, ' ').trim() : null;
                            product.confinsCST              = products[i+1].querySelector(querySelector.produtos.item.confinsCST);
                            product.confinsCST              = product.confinsCST ? product.confinsCST.innerText.replace(/\s+/g, ' ').trim() : null;
                            allProducts.push(product);
                        }
                        return allProducts;
                    }
                } catch (ex) {
                    console.log("ERROR", ex);
                    return [];
                }                    
            }, querySelector);
            resolve(produtos);
        }());        
    });
};


