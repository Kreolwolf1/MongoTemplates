class Admin::TemplatesController < ApplicationController
  def new
  end

  def ajax_new
    @root = {
      :attr => {
        :id   => "node_1",
        :rel  => "drive"
      },
      :data   => "New template",
      :state  => ""
    }
    respond_to do |format|
      format.html { render action: "new" }
      format.json { render json: @root }
    end
  end

  def save_template
    @template_params = {
      :name     => params[:template][:name],
      :objects  => params[:template][:objects]
    }
    @template = Template.new(@template_params)
    @template.save()
    @response = {:status => "true"}
    render json: @response
  end
end
