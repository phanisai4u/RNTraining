package com.rntraining;

import android.app.Activity;
import android.app.ProgressDialog;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class ProgressDialogModule extends ReactContextBaseJavaModule {

    private static String MODULE_NAME = "ProgressDialog";
    private ReactApplicationContext _context = null;
    private ProgressDialog _dialog;
    @Nonnull
    @Override
    public String getName() {
        return MODULE_NAME;
    }

    public ProgressDialogModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this._context=reactContext;
    }

    @ReactMethod
    public void showProgressDialog(String message){
            if(_dialog == null) {
                _dialog = new ProgressDialog(getCurrentActivity());
            }
            _dialog.setMessage(message);
            _dialog.show();
    }

    @ReactMethod
    public void dismissDialog(){
        if(_dialog != null){
            _dialog.dismiss();
        }
    }
}
