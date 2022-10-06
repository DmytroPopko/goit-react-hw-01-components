import Profile from 'components/Profile/Profile';
import FriendList from 'components/FriendList/FriendList';
import { Statistics } from 'components/Statistics/Statistics';
import TransactionList from 'components/TransactionList/TransactionList';
import { Container } from './App.styled';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        username={user[0].username}
        tag={user[0].tag}
        location={user[0].location}
        avatar={user[0].avatar}
        stats={user[0].stats}
        followers={user[0].stats.followers}
        views={user[0].stats.views}
        likes={user[0].stats.likes}
      />
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends} />
      <TransactionList transactions={transactions} />
    </Container>
  );
}
