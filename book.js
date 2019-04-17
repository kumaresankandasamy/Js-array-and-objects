var Bookstore = [ 
    {
        title: 'The Hobbit',
        author: 'R.R. Tolkien',
        readingstatus: true
    },
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingstatus: true
    },
    {
        title: 'Walter Isaacson',
        author:  'Steve Jobs',
        readingstatus: false
    }];

for (var i = 0; i < Bookstore.length; i++) 
   {
    var book = "'" + Bookstore[i].title + "'" +' by '+ Bookstore[i].author + ".";
    if (Bookstore[i].readingstatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("Unread " + book);
    }
   }
   