import React from 'react';



class Arrays extends React.Component {


  constructor(props) {
      super(props);
      this.commonSorting = this.commonSorting.bind(this);
    }

    commonSorting() {

      const A =[4,7,1,2,9,10,22];
      const B=[5,6,1,2,62,5,4];
      const C=[62,2,22,4,7,5,1];

for(let i=0;i<A.length;i++){
for(let j=0;i<B.length;j++){

if(A[i]===B[i]){

  for(let k=0;i<C.length;k++){

if(B[j]===C[k])

console.log(k)
return k;
  }


}
}
}

      }



  render() {

    return (
      <div>
        <h1>Hello, world!</h1>
        <button onclick={this.commonSorting()}>
          Activate Common arrays
        </button>
      </div>
    );
  }
}


export default Arrays;
