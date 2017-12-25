import { Sample } from '../sample';

let porygonSample = new Sample();
porygonSample.title = "Porygon";
porygonSample.description = `
  Movies and series sorting and inventoring application with commands support
`;
porygonSample.imageLink = '/assets/porygon.png';


let portfolioSample = new Sample();
portfolioSample.title = "Portfolio";
portfolioSample.description = `
  This website (personal developer portfolio)
`;
portfolioSample.imageLink = '/assets/portfolio.png';


export let samplesList = [porygonSample, portfolioSample];
