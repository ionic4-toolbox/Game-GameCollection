import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess2',
  templateUrl: './chess2.page.html',
  styleUrls: ['./chess2.page.scss'],
})
export class Chess2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  var app = angular.module('myApp', ['toastr'])
          .directive('chessGame', chessGame);

function chessGame () {
  return {
    restrict: 'A',
    controller: function (toastr, $scope) {
      
      $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      $scope.columns = [1, 2, 3, 4, 5, 6, 7, 8];

      var pos = [];
      
      //Toggle of selected / destination markers on board
      $scope.getInitial = function (col, row, idx, idxp) {
  
        pos.push(idx, idxp);

        //ng-class '.initial' or '.destination' applied to selected element
        $scope.initialIdx = [pos[0], pos[1]];
        $scope.destinationIdx = [pos[2], pos[3]];

        if (pos.length >= 4) pos.splice(0);

        $scope.move = function () {
          
          var initial = angular.element('.initial');
          var destination = angular.element('.destination');

          // Piece class e.g. 'WP'
          var piece = initial[0].className.split(' ')[3];
          
          var checkPos = destination[0].className.split(' ');
          var blkWht = checkPos[checkPos.length - 2].substring(0, 1);

          //check if position is white or black piece already
          if (blkWht === 'W' || blkWht === 'B') {

            //remove the overtaken piece class
            destination.removeClass(checkPos[checkPos.length - 2].substring(0, 2));
            toastr.success('Wow! Nice move!')
          }

          //Add class to overtaken position
          destination.addClass(initial[0].className.split(' ')[3]);

          //reset square
          initial.removeClass(piece);

          //reset ng-class values
          this.initialIdx = false;
          this.destinationIdx = false;
        }
      }
      $scope.textMove = () => {
        if ($scope.text.length === 4) {
          var piece = this.text.substring(0, 2).toUpperCase();
          var position = this.text.substring(2, 4).toUpperCase();
          var init = angular.element(`.${position}`);
          init.removeClass(piece);
        }
        if ($scope.dest.length === 2) {
          var position = this.dest.substring(0, 2).toUpperCase();
          var destination = angular.element(`.${position}`);
          destination.addClass(piece);
        }

      };

      // This function is called inside of the ng-class object, for each div that is repeated,
      // It sets up the initial pieces classes for each side.
      $scope.piece = (row, col) => {
        var sqr = row + col;
        
        //white
        if (col == 2) return 'WP';
        if (sqr == 'A1' || sqr == 'H1') return 'WR';
        if (sqr == 'B1' || sqr == 'G1') return 'WH';
        if (sqr == 'C1' || sqr == 'F1') return 'WB';
        if (sqr == 'D1') return 'WQ';
        if (sqr == 'E1') return 'WK';

        //Black
        if (col == 7) return 'BP';
        if (sqr == 'H8' || sqr == 'H8') return 'BR';
        if (sqr == 'A8' || sqr == 'H8') return 'BR';
        if (sqr == 'B8' || sqr == 'G8') return 'BH';
        if (sqr == 'C8' || sqr == 'F8') return 'BB';
        if (sqr == 'D8') return 'BQ';
        if (sqr == 'E8') return 'BK';
      }

    }
  };

}
}
