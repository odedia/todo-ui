allow_k8s_contexts('tap-gke-iterate')
allow_k8s_contexts('tap')

SOURCE_IMAGE = os.getenv("SOURCE_IMAGE", default='your-registry.io/project/todo-ui')
LOCAL_PATH = os.getenv("LOCAL_PATH", default='.')
NAMESPACE = os.getenv("NAMESPACE", default='default')

k8s_custom_deploy(
    'todo-ui',
    apply_cmd="tanzu apps workload apply -f config/workload.yaml --live-update" +
               " --local-path " + LOCAL_PATH +
               " --source-image " + SOURCE_IMAGE +
               " --namespace " + NAMESPACE +
               " --yes >/dev/null" +
               " && kubectl get workload todo-ui --namespace " + NAMESPACE + " -o yaml",
    delete_cmd="tanzu apps workload delete -f config/workload.yaml --namespace " + NAMESPACE + " --yes",
    deps=['./src'],
    container_selector='workload',
    live_update=[
      sync('./dist', '/workspace/')
    ]
)

k8s_resource('todo-ui', port_forwards=["8080:8080"],
            extra_pod_selectors=[{'serving.knative.dev/service': 'todo-ui'}])
