export const Footer = () => {
 const year = new Date().getFullYear();

 return <footer>{`Copyright © Melissa's website ${year}`}</footer>;
}