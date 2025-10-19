/**
 * Board initialization and helper function.
 */

// I2C slave address for PIC16F1827.
const I2C_ADDRESS = 0x08;

// Register address.
const REG_ADD_M1A = 8;
const REG_ADD_M1B = 9;
const REG_ADD_M2A = 1;
const REG_ADD_M2B = 2;




/**
 * Blocks for Maker drive motors driver.
 */
//% weight=10 color=#ff8000 icon="\uf085" block="REKA:BIT"
//% groups=['DC Motors', 'Servos', 'RGB LED']
namespace MakerDrive {
    // Brake the motors.
    brakeMotor(MotorChannel.M1);
    brakeMotor(MotorChannel.M2);

    /**
     * Limit the range of a number.
     * @param value The number we want to limit.
     * @param min Minimum value of the number.
     * @param max Maximum value of the number.
     */
    //% blockHidden=true
    //% blockId=rekabit_limit
    export function limit(value: number, min: number, max: number): number {
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        return value;
    }
}
