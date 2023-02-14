import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {LoadingComponent} from '../../shared/loadingindicator';
import {getUsers} from '../../services/user.service';
import {useDispatch, useSelector} from 'react-redux';
import {setUsersAction} from '../../state/slices/user.slice';
import {User} from '../../models/user.types';
import {ErrorComponent} from '../../shared/errorcomponent';
import {selectUserState} from '../../state/selectors/user.selector';
import {UserListItem} from '../../shared/userlistitem';
import {RootHeader} from '../../shared/headers';
import {SearchBar} from '@rneui/base';
import {Box} from 'native-base';
import {styles} from '../../shared/styles';

const UserScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const users = useSelector(selectUserState).users;
  const dispatch = useDispatch();

  const filtered = () => {
    return searchText
      ? users.filter(
          u => u.name.includes(searchText) || u.email.includes(searchText),
        )
      : users;
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        const data: User[] = await getUsers();
        dispatch(setUsersAction(data));
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (error) {
    return (
      <>
        <ErrorComponent />
      </>
    );
  } else if (loading) {
    return (
      <>
        <LoadingComponent />
      </>
    );
  } else {
    return (
      <>
        <RootHeader title={'Users'} showBackButton={false} />
        <Box paddingBottom={2}>
          <SearchBar
            round
            inputStyle={styles.searchContainerStyle}
            inputContainerStyle={styles.searchInputContainerStyle}
            lightTheme={true}
            placeholder="Search..."
            onChangeText={(text: string) => {
              setSearchText(text);
            }}
            value={searchText}
          />
        </Box>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filtered()}
          renderItem={({item}) => <UserListItem user={item} />}
          keyExtractor={(item: User) => item.id}
        />
      </>
    );
  }
};

export default UserScreen;
