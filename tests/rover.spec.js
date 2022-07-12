const Rover = require('../index');

describe('Rover', () => {
    describe('putPosition()', () => {
        it('Put position Rover N', () => {
            const facing = new Rover(5,5)
            facing.putPosition(1,2,'N')
            expect(facing.facing).toEqual(1);
        })
        it('Put position Rover E', () => {
            const facing = new Rover(5,5)
            facing.putPosition(1,2,'E')
            expect(facing.facing).toEqual(2);
        })
        it('Put position Rover S', () => {
            const facing = new Rover(5,5)
            facing.putPosition(1,2,'S')
            expect(facing.facing).toEqual(3);
        })
        it('Put position Rover W', () => {
            const facing = new Rover(5,5)
            facing.putPosition(1,2,'W')
            expect(facing.facing).toEqual(4);
        })
    })
    describe('positionShow()', () => {
        it('Direction by Facing 1', () => {
            const facing = new Rover(5,5)
            facing.facing = 1
            const str = facing.positionShow()
            expect(str).toEqual('0 0 N');
        })
        it('Direction by Facing 2', () => {
            const facing = new Rover(5,5)
            facing.facing = 2
            const str = facing.positionShow()
            expect(str).toEqual('0 0 E');
        })
        it('Direction by Facing 3', () => {
            const facing = new Rover(5,5)
            facing.facing = 3
            const str = facing.positionShow()
            expect(str).toEqual('0 0 S');
        })
        it('Direction by Facing 4', () => {
            const facing = new Rover(5,5)
            facing.facing = 4
            const str = facing.positionShow()
            expect(str).toEqual('0 0 W');
        })
    })
    describe('toLeft()', () => {
        it('Test calculed point', () => {
          const facing = new Rover(5,5)
          expect(facing.pointed).toEqual(1)
        })
    })
    describe('toRight()', () => {
        it('Test calculed point', () => {
          const facing = new Rover(5,5)
          expect(facing.pointed).toEqual(1)
        })
    })
    describe('walk()', () => {
        it('Test move in map up', () => {
          const facing = new Rover(5,5)
          facing.N = 1
          facing.walk()
          expect(facing.y).toEqual(1)
        })
        it('Test move in map right', () => {
            const facing = new Rover(5,5)
            facing.E = 1
            facing.walk()
            expect(facing.y).toEqual(1)
        })
        it('Test move in map down', () => {
            const facing = new Rover(5,5)
            facing.S = 1
            facing.walk()
            expect(facing.y).toEqual(1)
        })
        it('Test move in map left', () => {
            const facing = new Rover(5,5)
            facing.W = 1
            facing.walk()
            expect(facing.y).toEqual(1)
        })
    })
    describe('firstProcess()', () => {
        it('Test mars action left', () => {
           const facing = new Rover(5,5)
           const spy = jest.spyOn(facing, 'toLeft')
           facing.firstProcess('L')
           expect(spy).toHaveBeenCalled()
        })
        it('Test mars action right', () => {
            const facing = new Rover(5,5)
            const spy = jest.spyOn(facing, 'toRight')
            facing.firstProcess('R')
            expect(spy).toHaveBeenCalled()
        })
        it('Test mars action move', () => {
            const facing = new Rover(5,5)
            const spy = jest.spyOn(facing, 'walk')
            facing.firstProcess('M')
            expect(spy).toHaveBeenCalled()
        })
    })
})