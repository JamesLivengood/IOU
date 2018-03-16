<img src='https://i.imgur.com/1DWX7Fw.png'/>

# I O U - U O M E, a splitwise.com clone

## I O U - U O M E is a bill sharing app.

  - Users can:
    - add friends
    - split bills with friends
    - specify exactly how much each person owes

  I O U - U O M E creates a dynamic chart of all the user's bills, how much the user owes / is owed total, and how much the user owes to each of their friends. Users can then record full, or incremental payments on their bills.

## Live Version
<a ref='iou-uome.herokuapp.com'>iou-uome.herokuapp.com</a>

## To deploy this app, clone this repo and then:

  - npm install
  - bundle install
  - rails db:setup

### How It Works

I O U - U O M E is built on a Ruby on Rails / PostgreSQL backend and a Javascript frontend on a React / Redux framework.

The backend stores all friendships between users, all bills, and payments on each bill. From this information, it calculates important user information, which is shown to the user on the frontend.

Information the user can see:
  - total balance on all bills
  - existing balance with each of their friends
  - total amount they currently owe
  - total amount they are owed
  - history of all transactions with each friend
  - original balance of a bill, current balance, and history of all payments

<img src='https://i.imgur.com/8XSEfQO.png'/>

### Amount Owed vs. Owed To You
