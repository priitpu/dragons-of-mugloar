const apiUrl = 'https://www.dragonsofmugloar.com/api/v2';

export const GAME = {
  async START() {
    try {
      const req = await fetch(`${apiUrl}/game/start`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
      const res = await req.json();
      return res;
    } catch (error) {
      return error;
    }
  }
};

export const INVESTIGATION = {
  async REPUTATION(gameId) {
    try {
      const req = await fetch(`${apiUrl}/${gameId}/investigate/reputation`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
      const res = await req.json();
      return res;
    } catch (error) {
      return error;
    }
  }
};

export const MESSAGES = {
  async GETALL(gameId) {
    try {
      const req = await fetch(`${apiUrl}/${gameId}/messages`);
      const res = await req.json();
      return res;
    } catch (error) {
      return error;
    }
  },
  async SOLVE(gameId, adId) {
    try {
      const req = await fetch(`${apiUrl}/${gameId}/solve/${adId}`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
      const res = await req.json();
      return res;
    } catch (error) {
      return error;
    }
  }
};

export const SHOP = {
  async GETALL(gameId) {
    try {
      const req = await fetch(`${apiUrl}/${gameId}/shop`);
      const res = await req.json();
      return res;
    } catch (error) {
      return error;
    }
  },
  async PURCHASE(gameId, itemId) {
    try {
      const req = await fetch(`${apiUrl}/${gameId}/shop/buy/${itemId}`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
      const res = await req.json();
      return res;
    } catch (error) {
      return error;
    }
  }
};
