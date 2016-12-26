import {generateReduxSymbol} from '../helpers/redux';

const SOCKET_SET = generateReduxSymbol('socket/SOCKET_SET');
const SOCKET_CHANNEL_SET = generateReduxSymbol('socket/SOCKET_CHANNEL_SET');

const initialState = {
  socket: null,
  channels: {}
};

export default function reducer(oldState = initialState, action = {}) {
  const state = oldState; // convertState(oldState);

  switch (action.type) {
    case SOCKET_SET: {
      return {
        ...state,
        socket: action.socket
      };
    }

    case SOCKET_CHANNEL_SET: {
      const channels = state.channels;
      channels[action.name] = action.channel;
      return {
        ...state,
        channels
      };
    }

    default:
      return state;
  }
}

export function socketSet(socket) {
  return {
    type: SOCKET_SET,
    socket
  };
}

export function socketChannelSet(name, channel) {
  return {
    type: SOCKET_CHANNEL_SET,
    name,
    channel
  };
}
