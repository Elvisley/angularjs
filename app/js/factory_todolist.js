app.factory('faclist', function () {

	var tarefa = {
		codigo : null,
		descricao : null,
		fechada: false
	};
	
	var tarefas = [
		{ codigo :1 ,descricao : "Bower", fechada : false },
		{ codigo :2 ,descricao : "Gulp", fechada : false },
		{ codigo :3 ,descricao : "Node", fechada : false },
		{ codigo :4 ,descricao : "Angular", fechada : true },
	];

	var validate = function(obj){
		if(obj.descricao != null && obj.descricao != "" ){
			return true;
		}

		return false;
	}

	var listar = function(){
		return tarefas;
	}

	var salvar = function(objeto){

		if(!validate(objeto)){
			throw "Tarefa invalida. O campo descrição é obrigatorio!";
		}

		tarefa.codigo = (tarefas.length) + 1 ,
		tarefas.push(objeto);
		tarefa = {
			codigo : null,
			descricao : null,
			fechada : false
		};
		return true;
	};

	var editar = function(codigo){
		var editar = tarefas.filter(function(ret){
			return ret.codigo == codigo;
		});

		if(editar.length == 0){
			throw "Codigo invalido.";
		}

		tarefa = {
			codigo : editar[0].codigo ,
			descricao : editar[0].descricao ,
			fechada: editar[0].fechada
		};
		
		return tarefa;
	}

	var atualizar = function(objeto){

		if(!validate(objeto)){
			throw "Tarefa invalida. O campo descrição é obrigatorio!";
		}

		tarefas.splice( (objeto.codigo - 1 ) , 1 , objeto );		
		
		tarefa = {
			codigo : null ,
			descricao : "",
			fechada : false
		};

		return true;
	};

	var remover = function(codigo){

		var removido = tarefas.length;

		tarefas = tarefas.filter(function(ret){
			return ret.codigo != codigo;
		});

		if( ( removido - 1 ) ==  tarefas.length){
			return true;
		}
		return false;
	}

	var concluido = function(codigo){
		var concluir = tarefas.filter(function(ret){
			return ret.codigo == codigo;
		});

		if(concluir.length == 0){
			throw "Tarefa nao encontrada!";
		}

		concluir[0].fechada = true;

		tarefas.splice( (concluir[0].codigo - 1 ) , 1 , concluir[0] );	

		if(tarefas[concluir[0].codigo - 1].fechada == true){
			return true;
		}
		return false;

	}

	var reabrir = function(codigo){
		var reabrir = tarefas.filter(function(ret){
			return ret.codigo == codigo;
		});

		if(reabrir.length == 0){
			throw "Tarefa nao encontrada!";
		}

		reabrir[0].fechada = false;

		tarefas.splice( (reabrir[0].codigo - 1 ) , 1 , reabrir[0] );	

		if(tarefas[concluir[0].codigo - 1].fechada == false){
			return true;
		}
		return false;

	}

	return {
		tarefa : tarefa,
		listar : listar,
		salvar : salvar,
		editar : editar,
		atualizar : atualizar,
		remover : remover,
		concluido : concluido,
		reabrir : reabrir,
	};
});