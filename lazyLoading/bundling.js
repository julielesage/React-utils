// importer le bundle uniquement au besoin permet d'accélérer le chargement de page :
const onClick = () => {
  import("./math").then(math => {
    console.log(math.add(16, 26));
  });
}