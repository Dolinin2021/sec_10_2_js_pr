import GameSavingLoader from './loader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (error) {
    console.log(error);
  }
})();
