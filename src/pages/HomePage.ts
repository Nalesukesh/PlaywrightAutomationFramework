import {Page, expect} from "@playwright/test";

export default class HomePage{
    private readonly serviceTitleLocator = 'service';

    constructor(private page: Page){
    }
    async expecToserviceTitleToBeVisible(){
        await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({timeout: 15000});
    }
}