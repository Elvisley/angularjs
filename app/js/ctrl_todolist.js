app.controller('cadastro', function($scope , faclist ){

	var vm = $scope;

	vm.cadastrar = true;

	vm.tarefas = faclist.listar();

	vm.tarefa = faclist.tarefa;

	$scope.listar = function(){
		return faclist.listar();
	}

	$scope.salvar = function(objeto){
		try{
			faclist.salvar(objeto);
			vm.tarefas = faclist.listar();	
			vm.cadastrar = true;
			return true;
		}catch(err) {
			return false;
		}	
	};

	$scope.editar = function(codigo){
		try{
			vm.tarefa = faclist.editar(codigo);
			vm.cadastrar = false;
		}catch(err) {
			return false;
		}
	}

	$scope.atualizar = function(objeto){
		try{
			faclist.atualizar(objeto);
			vm.tarefas = faclist.listar();
			vm.cadastrar = true;
		}catch(err) {
			return false;
		}
	};

	$scope.remover = function(codigo){
		if(faclist.remover(codigo)){
			vm.tarefas = faclist.listar();
			return true;
		}else{
			return false;
		}
	}

	$scope.concluido = function(codigo){
		try{
			if( faclist.concluido(codigo)){
				vm.tarefas = faclist.listar();	
				return true;
			}else{
				return false;
			}

			vm.cadastrar = false;
		}catch(err) {
			return err;
		}
	}

	$scope.reabrir = function(codigo){
		try{
			if( faclist.reabrir(codigo)){
				vm.tarefas = faclist.listar();	
				return true;
			}else{
				return false;
			}

			vm.cadastrar = false;
		}catch(err) {
			return err;
		}	

	}

});

