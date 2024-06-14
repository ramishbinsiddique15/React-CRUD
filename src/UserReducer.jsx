import { createSlice } from '@reduxjs/toolkit';
import userList from './Data';

const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
        const newUserId = state.length > 0 ? state[state.length - 1].id + 1 : 1;
        state.push({ ...action.payload, id: newUserId });
      },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find(user => user.id === parseInt(id));
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      const existingUser = state.find(user => user.id === parseInt(id));
      if (existingUser) {
        return state.filter(user => user.id !== parseInt(id));
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
