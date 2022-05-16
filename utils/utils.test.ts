import {nationalCodeEvaluator} from "./index";

describe('Validate utils',()=>{
    test('Correct iranian national code should be true',()=>{
        expect(nationalCodeEvaluator('0440399653')).toBe(true);
    })

    test('Incorrect iranian national code should be false',()=>{
        expect(nationalCodeEvaluator('0440399654')).toBe(false);
    })
})
