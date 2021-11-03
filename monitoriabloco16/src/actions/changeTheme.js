// ponha o nome do type sempre em uma constante/variavel, isso evita erros
//preciso exportar a variavel tbm, pois ela sera mencionada em outro arquivos
export const CHANGE_THEME = 'CHANGE_THEME';
// ela é um objeto e tem um tipo
const changeTheme = (mode) => ({
  type: CHANGE_THEME, //identifica qual action que é, o tipe tem que ser sempre unico
  // mode,
  //ou
  payload: mode,
});

export default changeTheme;

// export const CHANGE_THEME = 'CHANGE_THEME';

// const changeTheme = (mode) => ({
//   type: CHANGE_THEME,
//   payload: mode,
// });

// export default changeTheme;