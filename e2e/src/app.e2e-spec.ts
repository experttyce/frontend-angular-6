import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to DashboardSeko!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to AngularDashboard!');
>>>>>>> 163a3a88a4324f6f54cd8debb93e59d662a254ce
  });
});
