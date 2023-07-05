import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const OTPViews = ({navigation}) => {
  const inputRefs = useRef([]);
  const [otpValue, setOtpValue] = useState("");
  const [count, setCount] = useState(30);
  const [showButton, setShowButton] = useState(false);

  const focusNextInput = (index) => {
    if (inputRefs.current && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(interval);
          setShowButton(true);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [count]); // Thêm count vào mảng dependency

  const handleOtpChange = (text, index) => {
    setOtpValue((prevValue) => {
      const updatedValue = prevValue.split("");
      updatedValue[index] = text;
      return updatedValue.join("");
    });

    if (text.length === 1) {
      focusNextInput(index);
    }
  };

  const formatCount = (count) => {
    return count.toString().padStart(2, "0");
  };

  const handleResendOTP = () => {
    // Handle resend OTP logic here
    setCount(30);
    setShowButton(false);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={{ height: 40, width: "100%", justifyContent: "center", marginTop: 10 }}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{ height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
            <Icon as={AntDesign} name="left" size="md" />
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", justifyContent: "center", marginTop: 20, gap: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Mã 6 chữ số</Text>
          <Text>Vui lòng nhập mã chúng tôi đã gửi tới</Text>
        </View>

        <View style={{ width: "100%", flexDirection: "row", gap: 10, alignItems: "center", marginTop: 20 }}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.textInput}
              onChangeText={(text) => handleOtpChange(text, index)}
              maxLength={1}
              keyboardType="numeric"
            />
          ))}
        </View>
        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: 20, gap: 10 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{}}>Không nhận được OTP?</Text>
            {!showButton && (
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#B22830" }}>00:{formatCount(count)}</Text>
            )}
          </View>
          {showButton && (
            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#B22830" }}>Gửi lại OTP</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ flex: 1, width: "100%", justifyContent: 'flex-end', alignItems: "center", padding: 10 }}>
          {otpValue.length === 6 ? (
            <TouchableOpacity style={styles.btnAct}>
              <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>TIẾP THEO</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn}>
              <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>TIẾP THEO</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    padding: 10,
  },
  textInput: {
    height: 40,
    width: 34,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    textAlign: "center",
  },
  btn: {
    height: 40,
    width: "100%",
    backgroundColor: "#D1D5DB",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: "center"
  },
  btnAct: {
    height: 40,
    width: "100%",
    backgroundColor: "#B22830",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: "center"

  }

});

export default OTPViews;
