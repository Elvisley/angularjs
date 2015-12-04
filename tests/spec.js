describe('Testando aplicação para cadastro de tarefas com factory', function(){ //describe your object type
    beforeEach(module('todoList')); //load module

      it('Listar', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });

         ctrl.listar;

      })); 

      it('Cadastrar', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });

         var tarefa = { descricao : "Tarefa de Teste", fechada : true };
    
         expect(scope.salvar(tarefa)).toBe(true);

      }));

      it('Erro ao cadastrar', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });

         var tarefa = { descricao : "", fechada : true };
    
         expect(scope.salvar(tarefa)).toBe(false);

      }));

      it('Editar/Buscar', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });
         
         scope.editar(1);
         
         expect(scope.tarefa).toEqual({ codigo :1 ,descricao : "Bower", fechada : false });

      }));

      it('Atualizar', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });
         
         scope.editar(1);
        
         scope.tarefa.descricao = "Bower - FrontEnd";

         scope.atualizar(scope.tarefa);

         scope.editar(1);

         expect(scope.tarefa).toEqual({ codigo :1 ,descricao : "Bower - FrontEnd", fechada : false });

      }));

      it('Remover', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });
         
         expect(scope.remover(1)).toBe(true);
      }));


      it('Concluir', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });

         expect(scope.concluido(1)).toBe(true);
         
      }));

      it('Concluir - Codigo invalido', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });

         expect(scope.concluido(50)).toEqual('Tarefa nao encontrada!');
         
      }));

      it('Reabrir', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });

         expect(scope.concluido(4)).toBe(true);
         
      }));

      it('Reabrir - Erro no codigo', inject(function ($controller) {
         var scope = {};
         var ctrl = $controller('cadastro', { $scope: scope });

         expect(scope.concluido(50)).toEqual('Tarefa nao encontrada!');
         
      }));
     

});