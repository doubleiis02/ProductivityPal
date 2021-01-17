void setup() {
    pinMode(A2, INPUT);
    //pinMode(2, OUTPUT);
    pinMode(3, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    int IRval = analogRead(A2);
    Serial.println(IRval);
    while (analogRead(A2) <= 615) {
        tone(3, 880, 500);
        delay(500);
        tone(3, 440, 500);
        delay(500);
    }
    delay(100);

}
