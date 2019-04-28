// function getLength(something: string | number): number {
//   return something.length;
// }

function getLength(something: string | number): number {
  if ((<string>something).length) {
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
}

// function toBoolean(something: string | number): boolean {
//   return <boolean>something;
// }


// jQuery('#foo');