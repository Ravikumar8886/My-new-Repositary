import ActiPOM from './actiPOM.cy'

describe('page object model',function()
{
    it('to open acti',() =>
    {
        let lg=new ActiPOM()
        lg. openActi();
        lg.forUsername('admin');
        lg.forPossward('manager');
        lg.toSignin();
    })

})