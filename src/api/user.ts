import { type User , UserChannel } from '../types/types.ts';

const mockDirectUser = {
    channel: UserChannel.Direct
};

const mockEmployerUser = {
    channel: UserChannel.Employer
};

// mock get call with simulated loading
function get(_channel: UserChannel /* for mocking */): Promise<User> {
    return new Promise(resolve => {
        const response = _channel === UserChannel.Direct
                         ? mockDirectUser
                         : mockEmployerUser;
        setTimeout(() => resolve(response) , 500);
    });
}

export const userAPI = {
    get
};
