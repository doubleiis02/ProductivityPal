void setup() {
    pinMode(A2, INPUT);
    pinMode(2, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    Serial.println(analogRead(A2));
    delay(100);

}
