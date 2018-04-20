<img src='https://i.imgur.com/1DWX7Fw.png'/>

# I O U - U O M E, a splitwise.com clone

![Gif of chart changing size with bill amount change](https://media.giphy.com/media/4KFahcj0cA9P0MnMB9/giphy.gif)

## I O U - U O M E is a bill sharing app.

  - Users can:
    - add friends
    - split bills with friends
    - specify exactly how much each person owes

  I O U - U O M E creates a dynamic chart of all the user's bills, how much the user owes / is owed total, and how much the user owes to each of their friends. Users can then record full, or incremental payments on their bills.

## Live Version
* [iou-uome.herokuapp.com](iou-uome.herokuapp.com)

## To deploy this app, clone this repo and then:

  - npm install
  - bundle install
  - rails db:setup

<img src='https://i.imgur.com/HxnvWah.png'/>

### How It Works

I O U - U O M E is built on a Ruby on Rails / PostgreSQL backend and a Javascript frontend on a React / Redux framework.

The backend stores all friendships between users, all bills, and payments on each bill. From this information, it calculates important user information, which is shown to the user on the frontend.

Information the user can access about their own bills:
  - total balance on all bills
  - existing balance with each of their friends
  - total amount they currently owe
  - total amount they are owed
  - history of all transactions with each friend
  - original balance of a bill, current balance, and history of all payments

<img src='https://i.imgur.com/8XSEfQO.png'/>
