echo "##############################################################"
echo "##                    Tekton Deploy                         ##"
echo "##############################################################"
echo ""

echo "################################"
echo "##   Step1 Tekton PipeLine    ##"
echo "################################"
cd 01.Tekton_PipeLine/
kubectl apply -f release.yaml

echo "################################"
echo "##   Step2 Tekton DashBoard   ##"
echo "################################"
cd ../02.Tekton_DashBoard/
kubectl apply -f release-full.yaml

echo "################################"
echo "##   Step3 Tekton Trigger     ##"
echo "################################"
cd ../03.Tekton_Trigger/
kubectl apply -f interceptors.yaml
kubectl apply -f release.yaml.yaml
