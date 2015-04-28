(ns cljs.test)

(enable-console-print!)

(defn -main []
  (println "foo"))

(set! *main-cli-fn* -main)
