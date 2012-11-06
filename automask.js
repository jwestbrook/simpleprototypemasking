/*

 Port of autoMask - an adaption of anyMask from email kireol at yahoo.com to PrototypeJS method
 http://github.com/jwestbrook
 
*/
if(
   (typeof Prototype=='undefined') ||
   (typeof Element == 'undefined') ||
   (typeof Element.Methods=='undefined')
   )
                throw("this masking method requires the Prototype JavaScript framework");
else
{
        Element.addMethods({
                mask: function(element,sMask){
                        element.observe("keypress",function( event ){
                                var numeric_match = new RegExp(/[0-9]/);
                                var KeyTyped = String.fromCharCode(event.keyCode);
                                var targ = event.findElement();
                                keyCount = targ.value.length;
                                if (event.keyCode < 32)
                                {
                                        return element;
                                }
                                if(keyCount == sMask.length && event.keyCode > 32)
                                {
                                        event.stop();
                                        return element;
                                }
                                if ((sMask.charAt(keyCount+1) != '#') && (sMask.charAt(keyCount+1) != 'A' ))
                                {
                                        this.value = this.value + KeyTyped + sMask.charAt(keyCount+1);
                                        event.stop();
                                        return element;
                                }

                                if (sMask.charAt(keyCount) == '*')
                                        return element;

                                if (sMask.charAt(keyCount) == KeyTyped)
                                {
                                        return element;
                                }

                                if ((sMask.charAt(keyCount) == '#') && numeric_match.match(KeyTyped))
                                        return element;

                                if ((sMask.charAt(keyCount) == 'A') && KeyTyped.charCodeAt(0) >= 65 && KeyTyped.charCodeAt(0) <= 122)
                                        return element;

                                if ((sMask.charAt(keyCount+1) == '?') )
                                {
                                        this.value = this.value + KeyTyped + sMask.charAt(keyCount+1);
                                        return element;
                                }
                                event.stop();
                                return element;
                        });
                }
        });
}